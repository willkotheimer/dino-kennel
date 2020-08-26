//Need to import the array of dinosaurs

const makeDinoCards = dinosaurs => {

    dinosaurs.forEach((dinosaur) => {

        switch (dinosaurs.health) {
            case (dinosaurs.health === 0):
                makeDinoCard(dinosaur, 'graveyard');
                break;
            case (dinosaurs.health < 33):
                makeDinoCard(dinosaur, 'hospital');
                break;
            case (dinosaurs.health < 150):
                makeDinoCard(dinosaur, 'kennel');
                break;
            default: makeDinoCard(dinosaur, 'kennel');
        }
    }
}

const makeDinoCard = (dinosaur, livingquarters) => {

    const template = `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${dinosaur.imageUrl}" alt="">
            <div class="card-body">
                    <h5 class="dino-name">${dinosaur.name}</h5>
                    <div class="dino-health">${dinosaur.health}</div>
                    <div id="buttons">
                    <button id="eat">eat</button>
                    <button id="pack">pack</button>
                    <button id="display">display</button>
                    <button id="delete">delete</button>
                    </div>
            </div>
    </div>
    `

    document.getElementById(`${livingquarters}`)
        .append(template);


}