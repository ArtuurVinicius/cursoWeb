function meuObjeto() {}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function(){
    console.log(`Bom dia, meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = "Rafael"
obj2.falar()

const obj3 = {}

obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

// prototype != __proto__