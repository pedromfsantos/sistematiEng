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
        chrome.storage.local.clear(); //clear all notes
        this.arrayOfNotes = [];
        this.#nameVector = [];
        // delete also from storage

    }

    openAllNotes(){
       chrome.storage.local.get(null).then((result) => { 
        var allKeys = Object.keys(result)
        var allText= Object.values(result)
        console.log("todas as chaves " + allKeys)
        console.log("todos os texto " + allText)

        this.#notaArray.forEach(nota => {
            console.log("nome nota " + nota.nameNota)
            console.log("todas as chaves " + allKeys)
            console.log("tem nota nas chaves? " + result.hasOwnProperty(nota.nameNota) +" "+  nota.nameNota + " " + allKeys[0])
            if(nota.nameNota in result){  //precisei atualizar oos objetos aqui ja que nao seria exatamente possível no outro arquivo
                console.log("nota para abrir " + this.#notaArray.indexOf(nota))
                //nota.closeNote();
                nota.openNote();
            }
        });
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