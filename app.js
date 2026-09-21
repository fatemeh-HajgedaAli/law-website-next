const path = require("path");
const Module = require("module");

const nodeModulesPath =
  "/home/mohrplus/nodevenv/vakil-nasiri.ir/22/lib/node_modules";

process.env.NODE_PATH = nodeModulesPath;

Module._initPaths();

require("./server.js");
