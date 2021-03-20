import showResult from '../utils/showResult'

const removeDragData = (event) => {
  event.dataTransfer.items ? event.dataTransfer.items.clear() : event.dataTransfer.clearData()
}

const handleDrop = (event) => {
  event.preventDefault()
  const file =  event.dataTransfer.files[0]
  showResult(file)
  removeDragData(event)
}

const handleDragOver = event => event.preventDefault()

export const dragDropElement = document.getElementById('drag-drop')

export const addEventsDragDrop = () => {
  dragDropElement.addEventListener('drop', handleDrop)
  dragDropElement.addEventListener('dragover', handleDragOver)
}

