
export class Nota {
    #name;
    #url;
    #text;


    constructor(name, url){
        this.name = name
        this.url = url;
    }

    openNote(){
        window.open (this.url, this.name, "height=400,width=400,menubar=0,titlebar=0");
    }

    closeNote(){
        window.close();
    }

    deleteNote(){

    }

    get nameNota(){
        return this.name;
    }

    set nameNota(nameNota){
        this.name = nameNota;
    }

    get urlNota(){
        return this.url;
    }

    set urlNota(urlNota){
        this.url = urlNota;
    }

    get textNota(){
        return this.text;
    }

    set textNota(textNota){
        this.text = textNota
    }


}