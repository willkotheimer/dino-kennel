//import { addDinos } from './../components/addDinoModal.js'
import { getAllDinos } from './../helpers/data/sample-data.js'
import { makeDinoCards } from './../components/makeDinoCard.js'

const makeDinoForm = () => {

    const theseDinos = getAllDinos();
    $('.modal-form').append(`<form id="mydinoForm">
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="dinoname" name="name" placeholder="Name">
        </div>
        <div class="form-group  col-md-6">
            <label for="owner">Owner</label>
            <input type="text" class="form-control" id="dinoowner" name="owner" placeholder="Owner">
        </div>

    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="age">Age</label>
            <input type="text" class="form-control" id="dinoage" name="age" placeholder="Age">
        </div>
        <div class="form-group col-md-6">
            <label for="image">Image</label>
            <input type="text" class="form-control" name="image" id="dinoimage">
        </div>
    </div>

    <div class="form-row">
        <div class="form-group input-sm"></div>
        <label for="type">Type</label>
        <input type="text" class="form-control" id="dinotype" name="type" placeholder="Type">
    </div>
</div>

<div class="form-row">
<div class="form-group col-md-6">
    <button id="submit" type="submit" class="btn btn-primary">Save changes</button>
</div>
</div>
</form>`).submit(function (e) {
        e.preventDefault();
        const name = $('#dinoname').val();
        const imageUrl = $('#dinoimage').val();
        const owner = $('#dinoowner').val();
        const age = $('#dinoage').val();
        const type = $('#dinotype').val();
        const id = `dino${getAllDinos().length}`;

        if (typeof getAllDinos().push === "function") { console.log('ima function') }
        getAllDinos().push({
            id: id,
            name: name,
            type: type,
            age: age,
            owner: owner,
            adventures: [],
            health: 100,
            imageUrl: imageUrl
        });


        $('#addDinoModal').modal('toggle');
        makeDinoCards(getAllDinos());

    });;

}

export { makeDinoForm }