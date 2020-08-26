import { makeDinoCards } from './components/makeDinoCard.js';
import { getAllDinos } from './../javascripts/helpers/data/sample-data.js';


const init = () => {
    makeDinoCards(getAllDinos());
}

init();

