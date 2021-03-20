import convertJsonToScript from './convertJsonToScript'

export default (file, callback) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => {
    const result = JSON.parse(reader.result)
    const scripts = convertJsonToScript(result)
    callback({...scripts})
  })
  reader.readAsText(file)
}
