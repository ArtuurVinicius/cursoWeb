console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '...' // dentro de uma função o this aponta pra global
}

logThis()

// Em uma arrow function, o this aponta para module.exports ou exports