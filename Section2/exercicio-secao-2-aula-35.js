//Objetivo: fazer uma tela com input de noma, sobrenome,peso e altura.
//Colocar botão de enviar que adiciona as informações em uma lista mostrada na parte de baixo;
const PersonList = []
const HandleAdd = () => {
  const nameValue = document.getElementById("nome")
  const secondName = document.getElementById("sobrenome")
  const weight = document.getElementById("peso")
  const height = document.getElementById("altura")

  const NewPerson = {
    nome: nameValue.value,
    sobrenome: secondName.value,
    weight: weight.value,
    height: height.value
  }

  PersonList.push(NewPerson)
  console.log(PersonList)
  const element = document.createElement("p")
  PersonList.map((item) => {
    element.innerHTML = `Nome: ${item.nome} sobrenome: ${item.sobrenome} peso: ${item.weight} altura: ${item.height}`
    document.body.appendChild(element)
  })
}
