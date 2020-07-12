const name = 'Peter'
const lastName = 'Parker'

// const nombreCompleto = nombre + ' ' + apellido;
const fullName = `${name} ${lastName}`

// console.log( nombreCompleto );

export function sayHello(name = 'Rick') {
  return `Hello ${name}!`
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
