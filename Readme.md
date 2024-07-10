# V_4 Node.js Global Object & Module System

### node.js has a concept name global as like browser has window

### module is separate file.

- in node we can not access a variable from another module directly, rather we can get the variable using export and import/require
- the whole code of a module stays inside of an Effie function
- Effie function takes some arguments like this,
  (function(exports, require, module, **filename, **dirname){var a = 5} module.exports = a)
