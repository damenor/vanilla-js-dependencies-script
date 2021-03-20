import showResult from '../utils/showResult'


const onChangeInput = _ => {
  if(inputFile.files.length > 0) showResult(inputFile.files[0])
}

export const inputFile = document.getElementById('file')

export const addEventInputFile = () => {
  inputFile.addEventListener('change', onChangeInput)
}
