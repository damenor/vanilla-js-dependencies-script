export const modal = document.getElementById('modal')
const modalOverlay = document.getElementById('modal__overlay')
export const modalContainer = document.getElementById('modal__container')

// setTimeout(() => {
//   modal.classList.add('open')
// }, 2000)

export const addEventModal = () => {
  modalOverlay.addEventListener('click', () => {
    modalContainer.innerHTML = ''
    modal.classList.remove('open')
  })
}
