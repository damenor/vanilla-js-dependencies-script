const SCRIPT_NPM = `npm install`
const SCRIPT_YARN = `yarn add`
const SCRIPT_DEV = `-D`

const SCRIPTS = [
  { title: 'Npm dependencies', value: `${SCRIPT_NPM}` },
  { title: 'Yarn dependencies', value: `${SCRIPT_YARN}` },
]

const SCRIPTS_DEV = [
  { title: 'Npm devDependencies', value: `${SCRIPT_NPM} ${SCRIPT_DEV}` },
  { title: 'Yarn dependencies', value: `${SCRIPT_YARN} ${SCRIPT_DEV}` },
]

const getScriptValueUpdated = (script, dependencies) => {
  for(let dependencie in dependencies) {
    script.value += ` ${dependencie}`
  }
  return script
}

export default json => {
  const scripts = SCRIPTS.map(script => getScriptValueUpdated(script, json.dependencies))
  const scriptsDev = SCRIPTS_DEV.map(script => getScriptValueUpdated(script, json.devDependencies))
  return { scripts, scriptsDev }
}
