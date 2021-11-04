/* Botão voltar para o top */
const iconButton = document.querySelector('.icon')

function icon() {
  if (window.scrollY >= 50) {
    iconButton.classList.add('show')
  } else {
    iconButton.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  icon()
})

// Cadastro

const fields = document.querySelectorAll('[required]')

function ValidateField(field) {
  // logica para verificar se existem erros
  function verifyErrors() {
    let foundError = false

    for (let error in field.validity) {
      // se não for customError
      // então verifica se tem erro
      if (field.validity[error] && !field.validity.valid) {
        foundError = error
      }
    }
    return foundError
  }

  function customMessage(typeError) {
    const messages = {
      text: {
        valueMissing: 'Por favor, preencha este campo'
      },
      email: {
        valueMissing: 'Email é obrigatório',
        typeMismatch: 'Por favor, preencha um email válido'
      }
    }

    return messages[field.type][typeError]
  }

  function setCustomMessage(message) {
    const spanError = field.parentNode.querySelector('span.error')

    if (message) {
      spanError.classList.add('active')
      spanError.innerHTML = message
    } else {
      spanError.classList.remove('active')
      spanError.innerHTML = ''
    }
  }

  return function () {
    const error = verifyErrors()

    if (error) {
      const message = customMessage(error)

      field.style.borderColor = 'red'
      setCustomMessage(message)
    } else {
      field.style.borderColor = 'green'
      setCustomMessage()
    }
  }
}

function customValidation(event) {
  const field = event.target
  const validation = ValidateField(field)

  validation()
}

for (field of fields) {
  field.addEventListener('invalid', event => {
    // eliminar o bubble
    event.preventDefault()

    customValidation(event)
  })
  field.addEventListener('blur', customValidation)
}

// Maquina de escrever no titulo
function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 85 * i)
  })
}
const titulo = document.querySelector('h1')
typeWrite(titulo)
// typeWrite(document.querySelector('p'))
// poderia adicionar mais em outros conteúdos com esse último código.

/* modal
function iniciaModal(modalID) {
  const modal = document.getElementById(modalID)
  modal.classList.add('mostrar')
  modal.addEventListener('click', e => {
    if (e.target.id == modalID) {
      modal.classList.remove('mostrar')
    }
  })
}

const button = document.querySelector('.contatc .button')
localStorage.addEventListener('click', () => iniciaModal('modal-promocao'))
*/

// function showModal() {
//   var element = document.getElementById('Modal')
//   element.classList.add('show-modal')
// }
