import './styles/main.css'

import { addEventsDragDrop } from './scripts/dragDrop'
import { addEventInputFile } from './scripts/input-file'
import { addEventModal } from './scripts/modal'
import { addEventTabs } from './scripts/tabs'
import { addEventTheme } from './scripts/theme'

const initApp = () => {
  addEventsDragDrop()
  addEventInputFile()
  addEventModal()
  addEventTabs()
  addEventTheme()
}

initApp()
