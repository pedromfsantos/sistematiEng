import {Nota} from './notaLogic.js'

export class Manager{
    #notaArray;
    #nameVector;
    
    constructor(arrayNota, arrayNome){
        this.#notaArray = arrayNota;
        this.#nameVector = arrayNome;
    }

    createNewNote(){
        this.#nameVector.push("NewWindow"+this.#nameVector.length)
        //console.log(this.#nameVector)
        let notaObj = new Nota(this.vectorOfNames[this.#nameVector.length-1],"newNota.html", this);
        this.#notaArray.push(notaObj)
        //console.log(this.#notaArray)
        notaObj.openNote();
        ///window.open ("newNota.html", nameVector[nameVector.lenght-1], "height=400,width=400,menubar=0,titlebar=0,");
    }
    
    deleteAllNotes(){
        this.#notaArray.forEach(nota => {
            nota.closeNote();
            //console.log(nota);
        });
        chrome.storage.session.clear(); //clear all notes
        this.arrayOfNotes = [];
        this.#nameVector = [];
        // delete also from storage

    }

    openAllNotes(){
       chrome.storage.sync.get(["NewWindow0"]).then((result) => { // AGORA MEXER NA LOGICA DA WINDOW0 WINDOW 01 ETC
        console.log ("text is "+ result.NewWindow0);
       });
    }

    get arrayOfNotes(){
        return this.#notaArray;
    }

    set arrayOfNotes(array){
        this.#notaArray = array;
    }

    get vectorOfNames(){
        return this.#nameVector
    }

    set vectorOfNames(vector){
        this.#nameVector = vector
    }

}