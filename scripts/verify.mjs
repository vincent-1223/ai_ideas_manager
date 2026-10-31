import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(path.join(root, "client.js"), "utf8");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

function fakeStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    values,
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
  };
}

function loadPlugin(storage) {
  const listeners = new Map();
  const fakeWindow = {
    __ModuleLoader__: {
      load(definition) {
        fakeWindow.definition = definition;
      },
    },
    addEventListener(type, listener) {
      listeners.set(type, listener);
    },
    removeEventListener(type, listener) {
      if (listeners.get(type) === listener) listeners.delete(type);
    },
  };
  globalThis.localStorage = storage;
  globalThis.document = {
    createElement() {
      return { dataset: {}, textContent: "", remove() {} };
    },
    head: { appendChild() {} },
  };
  new Function("window", source)(fakeWindow);
  assert.equal(fakeWindow.definition.id, manifest.name);
  const React = {
    createElement() {},
    useState() {},
    useEffect() {},
    useRef() {},
    useSyncExternalStore() {},
    useMemo() {},
  };
  return { definition: fakeWindow.definition, plugin: fakeWindow.definition.factory(() => React), listeners };
}

assert.equal(manifest.name, "@local/ai-ideas-manager");
assert.equal(manifest.dsh.manifestVersion, 1);
assert.ok(fs.existsSync(path.join(root, manifest.dsh.bundle.patch)));

const storage = fakeStorage();
const { plugin, listeners } = loadPlugin(storage);
assert.ok(plugin.inject.includes("slots"));
assert.ok(plugin.inject.includes("locale"));

const registrations = [];
let dictionaries;
const disposers = [];
plugin.apply({
  effect(effect) {
    const dispose = effect();
    if (typeof dispose === "function") disposers.push(dispose);
  },
  locale: {
    register(namespace, value) {
      assert.equal(namespace, "ai-ideas-manager");
      dictionaries = value;
      return () => {};
    },
  },
  slots: {
    inject(_slot, callback) {
      callback();
      return () => {};
    },
    register(options) {
      registrations.push(options);
      return () => {};
    },
  },
});

assert.deepEqual(
  registrations.map((entry) => entry.name).sort(),
  ["shell.overlay", "sidebar.footer.action"],
);
assert.deepEqual(Object.keys(dictionaries.zh).sort(), Object.keys(dictionaries.en).sort());
assert.ok(listeners.has("keydown"));
assert.equal(typeof plugin.apply, "function");

const usedKeys = new Set(
  [...source.matchAll(/(?:^|[^\w$])t\("([^"]+)"/gm)].map((match) => match[1]),
);
for (const status of ["backlog", "in_progress", "completed"]) usedKeys.add(`status.${status}`);
assert.deepEqual([...usedKeys].filter((key) => !(key in dictionaries.zh)), []);
assert.deepEqual([...usedKeys].filter((key) => !(key in dictionaries.en)), []);

const stored = JSON.parse(storage.getItem("ai-ideas-manager:v1"));
assert.equal(stored.version, 1);
assert.ok(stored.tasks.length > 0);
assert.ok(stored.ideas.length > 0);
assert.ok(stored.logs.length > 0);

const damagedStorage = fakeStorage({ "ai-ideas-manager:v1": "{damaged" });
loadPlugin(damagedStorage);
assert.ok(
  [...damagedStorage.values.keys()].some((key) => key.startsWith("ai-ideas-manager:v1:corrupt:")),
);

for (const dispose of disposers) dispose();
console.log(
  JSON.stringify(
    {
      plugin: manifest.name,
      slots: registrations.map((entry) => entry.name),
      localeKeys: Object.keys(dictionaries.zh).length,
      seed: {
        tasks: stored.tasks.length,
        ideas: stored.ideas.length,
        logs: stored.logs.length,
      },
      checks: "ok",
    },
    null,
    2,
  ),
);
