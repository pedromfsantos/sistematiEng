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

document.getElementById("open").onclick = function(){
    manager.openAllNotes();
}

export function getManager(){
    return manager;
}

// ABRIR NOTAS


 