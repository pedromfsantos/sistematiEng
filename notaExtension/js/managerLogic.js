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
        console.log(this.#nameVector)
        let notaObj = new Nota(this.#nameVector[this.#nameVector.lenght-1],"newNota.html" );
        this.#notaArray.push(notaObj)
        notaObj.openNote();
        ///window.open ("newNota.html", nameVector[nameVector.lenght-1], "height=400,width=400,menubar=0,titlebar=0,");
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