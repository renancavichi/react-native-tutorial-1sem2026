var idade = 10

let escolha = "email"

const user = {
    nome: "Renan",
    email: "renancavichi@gmail.com",
    idade: 41,
    "sobre nome": "Cavichi" // Propriedade com espaço, deve ser acessada com colchetes
}

console.log(user.nome) // Renan
console.log(user["nome"])  // Renan // Acessando propriedade usando colchetes, útil para propriedades com caracteres especiais ou espaços

console.log(user["sobre nome"]) // Cavichi  // Acessando propriedade com espaço usando colchetes
 
console.log(user[escolha]) // Acessando propriedade usando variável, resultado: "renancavichi@gmail.com"

const props = { // Criação de um objeto props
    avatar:"https://github.com/renancavichi.png",
    name: "Renan Cavichi",
    email: "renancavichi@gmail.com"
}

//const avatar = props.avatar
//const name = props.name
//const email = props.email

const {avatar, name, email} = props // Desestruturação de objetos

console.log(avatar) // "https://github.com/renancavichi.png"
console.log(email) // "renancavichi@gmail.com"