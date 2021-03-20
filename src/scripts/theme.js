const themeContainer = document.getElementById('theme__container')

const rotateContainer = () => {
  const currentRotation = parseInt(getComputedStyle(themeContainer).getPropertyValue('--rotation'))
  themeContainer.style.setProperty('--rotation', currentRotation + 180)
}

export const addEventTheme = () => {
  themeContainer.childNodes.forEach(element => {
    element.addEventListener('click', () => {
      document.body.classList.toggle('dark')
      rotateContainer()
    })
  })
}

