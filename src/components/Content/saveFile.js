import { saveAs } from 'file-saver'

const saveFile = () => {
  saveAs('./images/FredSantos_Frontend_Developer.pdf', 'Curriculum')
}

export default saveFile
