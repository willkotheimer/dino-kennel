const dinos = [
  {
    id: 'dino1',
    name: 'Rex',
    type: 'T Rex',
    age: 100,
    owner: 'Jacob',
    adventures: [{ id: 'adventure1', date: 'February 23, 2020' }, { id: 'adventure2', date: 'February 23, 2020' }],
    health: 92,
    imageUrl: 'https://www.fieldandstream.com/resizer/8xkluKAxQZsEHJKj6qwyU0mLhTo=/760x448/filters:focal(458x270:459x271)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TQFN3CD5DAEM4DL2ACD42ZJ5E4.png'
  },
  {
    id: 'dino2',
    name: 'Steve',
    type: 'Velociraptor',
    age: 1,
    owner: 'Jacob',
    adventures: [],
    health: 1,
    imageUrl: 'https://i.ebayimg.com/images/g/61UAAOSweNpdmtI2/s-l640.png'
  },
  {
    id: 'dino3',
    name: 'Susan',
    type: 'stegosaurus',
    age: 55,
    owner: 'Jacob',
    adventures: [],
    health: 0,
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-320-80.jpg'
  },
  {
    id: 'dino4',
    name: 'Barry',
    type: 'Brontosaurus',
    age: 100,
    owner: 'Abbey',
    adventures: [],
    health: 100,
    imageUrl: 'https://lh3.googleusercontent.com/proxy/_rJSL88ErOEvgHl5SInWOEolOdikwIMcKWPv9iqZzt3IUkD33WdG6d9qd8TmNJFSiszTXm7JeGQPocmB_BZErKxt__25LOpW75dmnVuy0nuY0PatX2cIYA-C'
  },
  {
    id: 'dino5',
    name: 'Steph',
    type: 'Spinosaurus',
    age: 100,
    owner: 'Dr. T',
    adventures: [],
    health: 75,
    imageUrl: 'https://cdn1.bigcommerce.com/n-yp39j5/ujq6o/products/1060/images/2390/Papo_Spinosaurus_2019_DansDinosaurs__69805.1552618774.1280.1280.jpg?c=2'
  },
  {
    id: 'dino6',
    name: 'Tim',
    type: 'Talarurus',
    age: 100,
    owner: 'Dr. T',
    adventures: [],
    health: 55,
    imageUrl: 'https://vignette.wikia.nocookie.net/dinosaurs/images/2/2b/TalarurusInfobox.png/revision/latest/scale-to-width-down/340?cb=20150512165226'
  },
  {
    id: 'dino7',
    name: 'Tracy',
    type: 'Triceratops',
    age: 100,
    owner: 'Abbey',
    adventures: [],
    health: 0,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Wsvp2M7iL._AC_SX425_.jpg'
  },
  {
    id: 'dino8',
    name: 'Percy',
    type: 'Pterodactyl',
    age: 10,
    owner: 'Jacob',
    adventures: [],
    health: 10,
    imageUrl: 'https://images.dinosaurpictures.org/3_pterodactyl_63be.jpg'
  },
  {
    id: 'dino9',
    name: 'Betty',
    type: 'brontosaurus',
    age: 22,
    owner: 'Dr. T',
    adventures: [],
    health: 22,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOdrC7hlvBawFQ7g8vgwHcfQphX5WfeN2bth0dvc4M2oxNGdSD'
  }
];

const adventures = [
  {
    id: 'adventure1',
    title: 'BRAWL',
    healthHit: 50
  },
  {
    id: 'adventure2',
    title: 'Cave exploration',
    healthHit: 10
  },
  {
    id: 'adventure3',
    title: 'Ropes course',
    healthHit: 13
  },
  {
    id: 'adventure4',
    title: 'Playing in traffic',
    healthHit: 3
  },
  {
    id: 'adventure5',
    title: 'Baking',
    healthHit: 70
  },
  {
    id: 'adventure6',
    title: 'Welding',
    healthHit: 4
  },
  {
    id: 'adventure7',
    title: 'Underwater Basket Weaving',
    healthHit: 99
  },
  {
    id: 'adventure8',
    title: 'Surfing',
    healthHit: 39
  },
  {
    id: 'adventure9',
    title: 'Fishing',
    healthHit: 23
  },
  {
    id: 'adventure10',
    title: 'Shot from a cannon',
    healthHit: 60
  }
];

// const randomAdventure = () => {
//   return adventures[Math.floor(Math.random()
//     * Math.floor(adventures.length - 1))];
// }

// const sendOnAdventure = (e) => {
//   const dino = e.target.id;
//   console.log(dino);
//   findDino(dino).adventures
//     .push(randomAdventure().id);
// }

const deleteDino = (id) => {
  dinos.splice(1, indexOf(findDino(id)));
}


const findDino = (myId) => {
  return getAllDinos().find(dino =>
    dino.id.includes(myId))
}

const getAllDinos = () => {
  return dinos;
};

const adventureData = (id) => {
  let adventuredata = [];
  const adventures = getAdventures();
  const dinoadv = id.adventures;
  if (dinoadv.length != 0) {
    dinoadv.forEach((d, i) => {
      const adventure = getAdventures().find(id => id = d.id);
      adventuredata.push(
        {
          id: i,
          adventure: adventure.title,
          date: d.date,
        });
    });
    return makeTableData(adventuredata);
  } else {
    return "<tr><td>No adventures to show</td></tr>"
  }

}

const makeTableData = (adventuredata) => {
  let myTable = ""
  adventuredata.forEach(ad => {
    myTable += `<tr>
      <td>${ad.id}</td>
      <td>${ad.adventure}</td>
      <td>${ad.date}</td></tr>
    `;
  });
  return myTable;
}

const getAdventures = () => {
  return adventures;
};


export {
  getAllDinos, getAdventures, deleteDino,
  findDino, adventureData
}