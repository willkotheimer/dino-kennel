//import { addDinos } from './../components/addDinoModal.js'
import { getAllDinos } from './../helpers/data/sample-data.js'
import { makeDinoCards } from './../components/makeDinoCard.js'

const makeDinoForm = () => {

    $('.modal-body .modal-form').append(`<form id="mydinoForm">
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Name">
        </div>
        <div class="form-group  col-md-6">
            <label for="owner">Owner</label>
            <input type="text" class="form-control" id="owner" name="owner" placeholder="Owner">
        </div>

    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="age">Age</label>
            <input type="text" class="form-control" id="age" name="age" placeholder="Age">
        </div>
        <div class="form-group col-md-6">
            <label for="image">Image</label>
            <input type="text" class="form-control" name="image" id="image">
        </div>
    </div>

    <div class="form-row">
        <div class="form-group input-sm"></div>
        <label for="type">Type</label>
        <input type="text" class="form-control" id="type" name="type" placeholder="Type">
    </div>
</div>

<div class="form-row">
<div class="form-group col-md-6">
    <button id="submit" type="submit" class="btn btn-primary">Save changes</button>
</div>
</div>
</form>`).submit(function (e) {
        e.preventDefault();
        const name = $('input#name')[1].value;
        const imageUrl = $('input#image')[1].value
        const owner = $('input#owner')[1].value
        const age = $('input#age')[1].value
        const type = $('input#type')[1].value
        const id = `dino${getAllDinos().length}`;

        dinos.push({
            id: id,
            name: name,
            type: type,
            age: age,
            owner: owner,
            adventures: [],
            health: 100,
            imageUrl: imageUrl
        });
        makeDinoCards(getAllDinos());
    });;
}

export { makeDinoForm }