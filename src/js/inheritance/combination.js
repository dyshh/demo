const { Parent, Child } = require('./demo')

// 组合式继承
Child.prototype = new Parent() // 缺点是调用了两次Parent构造函数

var child1 = new Child('kevin', '18')

console.log(child1)
