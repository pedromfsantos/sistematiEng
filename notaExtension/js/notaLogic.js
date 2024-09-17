
export class Nota {
    #name;
    #url;
    #text;
    #manager;
    #noteWindow


    constructor(name, url, manager){
        this.#name = name
        this.#url = url;
        this.#manager = manager
    }

    openNote(){
        this.windowNote = window.open (this.#url, this.#name, "height=400,width=400,menubar=0,titlebar=0");
        
    }

    closeNote(){
        this.windowNote.close();
    }

    get nameNota(){
        return this.#name;
    }

    set nameNota(nameNota){
        this.#name = nameNota;
    }

    get urlNota(){
        return this.#url;
    }

    set urlNota(urlNota){
        this.#url = urlNota;
    }

    get textNota(){
        return this.#text;
    }

    set textNota(textNota){
        this.#text = textNota
    }

    get mngr(){
        return this.#manager
    }

    set mngr(manager){
        this.#manager = manager
    }

    get windowNote(){
        return this.#noteWindow
    }

    set windowNote(myWindow){
        this.#noteWindow = myWindow
    }
}