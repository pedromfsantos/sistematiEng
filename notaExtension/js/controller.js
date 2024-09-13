import {Manager} from './managerLogic.js'


let arrayNota = []
let arrayNome = []

const manager = new Manager(arrayNota, arrayNome);


// ###################### Menu #####################

// CRIAR NOVA NOTA
document.getElementById("criar").onclick = function() {
    manager.createNewNote();
};

document.getElementById("deleteall").onclick = function() {
    manager.deleteAllNotes();
};

export function getManager(){
    return manager;
}

// ABRIR NOTAS


 