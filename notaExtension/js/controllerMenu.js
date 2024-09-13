import {Manager} from './managerLogic.js'

let arrayNota = []
let arrayNome = []

const manager = new Manager(arrayNota, arrayNome);

// CRIAR NOVA NOTA
document.getElementById("criar").onclick = function() {
    manager.createNewNote()
};



 