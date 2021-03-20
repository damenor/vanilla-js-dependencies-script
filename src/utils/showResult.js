import readFile from './readFile'

import { modal, modalContainer } from '../scripts/modal'

const createResultItem = script => {
  const resultItemElement = document.createElement('div')
  resultItemElement.className = 'result__item'  

  const resultItemElementTitle = document.createElement('h3')
  resultItemElementTitle.innerText = script.title

  const resultItemElementCode = document.createElement('code')
  resultItemElementCode.innerText = script.value
  
  // const resultItemElementCodeClipboard = document.createElement('span')
  // resultItemElementCodeClipboard.innerText = '📋'
  // resultItemElementCode.appendChild(resultItemElementCodeClipboard)
  
  resultItemElement.appendChild(resultItemElementTitle)
  resultItemElement.appendChild(resultItemElementCode)

  return resultItemElement
}

export const createResult = ({ scripts }) => {
  const resultElement = document.createElement('div')
  resultElement.id = 'result'

  scripts.scripts.forEach(script => {
    const resultItemElement = createResultItem(script)
    resultElement.appendChild(resultItemElement)
    console.log('scripts', resultItemElement)
  })
  
  scripts.scriptsDev.forEach(script => {
    const resultItemElement = createResultItem(script)
    resultElement.appendChild(resultItemElement)
  })
  
  modalContainer.appendChild(resultElement)
  modal.classList.add('open')

}

export default (file) => {
  readFile(file, scripts => {
    createResult({ scripts })
  })
}