import {Nota} from './notaLogic.js'

export class Manager{
    #notaArray;
    #nameVector;
    
    constructor(arrayNota, arrayNome){
        this.#notaArray = arrayNota;
        this.#nameVector = arrayNome;
    }

    createNewNote(){
        chrome.storage.local.get(null).then((result) => {
        let testString = "NewWindow"+this.#nameVector.length
        var allKeys = Object.keys(result)
        if (!( testString in result)){
            this.#nameVector.push("NewWindow"+this.#nameVector.length)
            //console.log(this.#nameVector.length)
        }
        else {
            var index = allKeys.length
            this.#nameVector.push("NewWindow"+index)
            //console.log(this.#nameVector.length)
        }
        let notaObj = new Nota(this.vectorOfNames[this.#nameVector.length-1],"newNota.html", this);
        this.#notaArray.push(notaObj)
        console.log(this.arrayOfNotes.length)
        notaObj.openNote();
        ///window.open ("newNota.html", nameVector[nameVector.lenght-1], "height=400,width=400,menubar=0,titlebar=0,");
        });
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
        console.log("chaves " + allKeys)
        console.log("allText " + allText)
        if(!(this.#notaArray.length === 0)){
            this.#notaArray.forEach(nota => {
                if(nota.nameNota in result){  //precisei atualizar oos objetos aqui ja que nao seria exatamente possível no outro arquivo
                    console.log("nota para abrir " + this.#notaArray.indexOf(nota))
                 //nota.closeNote();
                    nota.openNote();
                }
            });
            allKeys.forEach(nomeNota => {
                if (!(nomeNota in this.#nameVector )){
                    let newObj = new Nota(nomeNota,"newNota.html", this);
                    this.#notaArray.push(newObj)
                    newObj.openNote();
                }
            })
        } else{
            allKeys.forEach(nomeNota => {
                let newObj = new Nota(nomeNota,"newNota.html", this);
                this.#notaArray.push(newObj)
                newObj.openNote();
            })
            
        }
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