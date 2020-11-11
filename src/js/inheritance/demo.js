function Parent(name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
}

// 在Parent.prototype上定义方法，方法本身就可以共用，节省内存空间
Parent.prototype.sayName = function () {
    console.log(this.name)
}

function Child(name, age) {
    // 继承属性
    Parent.call(this, name)
    this.age = age
}

module.exports = {
    Parent,
    Child
}
