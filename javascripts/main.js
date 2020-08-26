import { dinos } from './helpers/data/sample-data.js';
import { makeDinoCards } from './components/makeDinoCard.js';

const init = () => {
    makeDinoCards(dinos);
}

init();
