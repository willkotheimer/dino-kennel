//Need to import the array of dinosaurs

const makeDinoCards = (dinosaurs) => {

    //clear dino cards:
    $('#kennelContainer').html('');
    $('#hospitalContainer').html('');
    $('#graveyardContainer').html('');

    //print all dino cards

    dinosaurs.forEach((dinosaur) => {

        let health = dinosaur.health;
        if (health > 50) {
            makeDinoCard(dinosaur, 'kennelContainer');
        } else if (health < 50 && health > 5) {
            makeDinoCard(dinosaur, 'hospitalContainer');
        } else if (health <= 5) {
            makeDinoCard(dinosaur, 'graveyardContainer');
        }

    });
}



const makeDinoCard = (dinosaur, livingquarters) => {

    //print each dino card:

    const template = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${dinosaur.imageUrl}" alt="">
            <div class="card-body">
                    <h5 class="dino-name">${dinosaur.name}</h5>
                    <div class="dino-health">${dinosaur.health}</div>
                    <div id="buttons" class="d-flex flex-row flex-wrap">
                    <button class="btn btn-outline-success" id="eat"><i class="fas fa-drumstick-bite"></i></button>
                    <button class="btn btn-outline-warning" id="pack"><i class="fas fa-suitcase-rolling"></i></button>
                    <button class="btn btn-outline-dark" id="display" data-toggle="modal" data-target="#displayModal"
                    data-whatever="${dinosaur.id}"><i class="far fa-eye"></i></button>
                    <button class="btn btn-outline-danger" id="delete"><i class="far fa-trash-alt"></i></button>
                    </div>
            </div>
    </div>`;
    let div = document.getElementById(`${livingquarters}`);
    div.insertAdjacentHTML('beforeend', template);
}

export { makeDinoCards }