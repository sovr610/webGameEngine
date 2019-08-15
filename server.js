var LuaVM = require('lua.vm.js');

var l = new LuaVM.Lua.State();
l.execute('print("Hello, world")');