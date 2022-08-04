//=========Variaves da aplicação=========//
const contentBody = document.querySelector('.body-list')
const screnn1 = document.querySelector('.screnn1')
const scren2 = document.querySelector('.screnn2')
const btnReset = document.querySelector('.btn-reset')
const h2Text = screnn1.querySelector('p')
const darkmodeDay = document.querySelector('.svg-day')
const darkmodeBlack = document.querySelector('.svg-darck')

//Botão para gerar Número
const btnPlay = document.querySelector('.btn-play')

//Números de tentativas
let xAttempts = 1

let newNumber = NewNumberaleatori() // Estou armazenando a Função que vai ser chamada toda vez que a página for carregada

//============================Eventos=============================//
//Botão para tentar
darkmodeDay.addEventListener('click', () => {
  alterarModoDarck()
  contentBody.classList.toggle('black')
})

darkmodeBlack.addEventListener('click', () => {
  alterarModoDarck()
  contentBody.classList.toggle('black')
})

btnPlay.addEventListener('click', handlceTryClick) //Aqui eu chamo a função

//Botão Para tentar novamente
btnReset.addEventListener('click', () => {
  newNumber = NewNumberaleatori()
  alterarEntreJanelas()
  h2Text.innerText = 'Adivinhe Um número entre 0 e 10'
  console.log(newNumber)
  xAttempts = 1
})

//===================================Funções===========================//

function handlceTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) === newNumber) {
    alterarEntreJanelas()
    scren2.querySelector(
      'h2'
    ).innerText = `Parabéns!! Você acertou em ${xAttempts} tentativas`
  }

  h2Text.innerText = `Uma pena! O número  ${inputNumber.value} não foi o número que eu pensei, tente novamente!`

  inputNumber.value = '' //Limpando o input depois de clicado
  xAttempts++ //adicionando a variavel de controle
  console.log('está entrando')
  console.log(newNumber)
}

function handleResetClick() {
  xAttempts = 1
  alterarEntreJanelas()
}

function alterarEntreJanelas() {
  screnn1.classList.toggle('hide')
  scren2.classList.toggle('hide')
}

function alterarModoDarck() {
  darkmodeDay.classList.toggle('hide')
  darkmodeBlack.classList.toggle('hide')
}

function NewNumberaleatori() {
  return Math.round(Math.random() * 10)
}
