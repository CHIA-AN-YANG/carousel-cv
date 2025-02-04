function getRuntime() {
  if (typeof Bun !== "undefined") return "Bun";
  if (typeof process !== "undefined" && process.versions?.node) return "Node.js";
  return "Unknown Environment";
}

console.log(`Running in: ${getRuntime()}`);