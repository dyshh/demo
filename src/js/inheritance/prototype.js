const { Parent, Child } = require('./demo')

/**
 * ES5的Object.create()实现
 * 只继承prototype(方法)，不继承构造函数的属性
 */
function objectCreate(o) {
    function F() {}
    F.prototype = o
    return new F()
}

/**
 * 寄生组合式继承
 * 最推荐、最好的继承实现
 */
function prototype(child, parent) {
    var prototype = objectCreate(parent.prototype)
    // child.constructor === Child.prototype.constructor
    prototype.constructor = child
    child.prototype = prototype
}

prototype(Child, Parent)

const child1 = new Child('pky', 25)
const child2 = new Child('zwx', 22)

console.log(child1) // Child { name: 'pky', colors: [ 'red', 'blue', 'green' ], age: 25 }
console.log(child2) // Child { name: 'zwx', colors: [ 'red', 'blue', 'green' ], age: 22 }
child1.sayName()
child2.sayName()

child1.colors.push('white')

console.log(child1) // Child { name: 'pky', colors: [ 'red', 'blue', 'green', 'white' ], age: 25 }
console.log(child2) // Child { name: 'zwx', colors: [ 'red', 'blue', 'green' ], age: 22 }
