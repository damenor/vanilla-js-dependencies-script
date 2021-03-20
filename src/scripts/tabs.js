import { dragDropElement } from './dragDrop'

const tabsButtonFile = document.getElementById('tabs__buttons--file')
const tabsButtonJson = document.getElementById('tabs__buttons--json')
const inputTextarea = document.getElementById('input-textarea')

const onClickButtonTabFile = () => {
  tabsButtonJson.classList.remove('active')
  inputTextarea.classList.remove('active')
  tabsButtonFile.classList.add('active')
  dragDropElement.classList.add('active')
}

const onClickButtonTabJson = () => {
  tabsButtonFile.classList.remove('active')
  dragDropElement.classList.remove('active')
  tabsButtonJson.classList.add('active')
  inputTextarea.classList.add('active')
}

export const addEventTabs = () => {
  tabsButtonFile.addEventListener('click', onClickButtonTabFile)
  // tabsButtonJson.addEventListener('click', onClickButtonTabJson)
}
