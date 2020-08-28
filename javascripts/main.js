import { makeDinoCards } from './components/makeDinoCard.js';
import { getAllDinos } from './../javascripts/helpers/data/sample-data.js';
import { displayModal } from './components/displayModal.js';

const init = () => {
    makeDinoCards(getAllDinos());
    displayModal();
}

init();

