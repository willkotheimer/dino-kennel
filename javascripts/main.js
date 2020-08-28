import { makeDinoCards } from './components/makeDinoCard.js';
import { getAllDinos } from './../javascripts/helpers/data/sample-data.js';
import { detailsModal } from './components/displayModal.js';
import { addDinoModal } from './components/addDinoModal.js';

const init = () => {
    makeDinoCards(getAllDinos());
    detailsModal();
    addDinoModal();
}

init();

