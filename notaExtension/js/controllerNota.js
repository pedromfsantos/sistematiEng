import {Nota} from './notaLogic.js'
import {Manager} from './managerLogic.js'
//import { getManager } from './controller.js'

// ###################### NOTAS #####################



//let manager = getManager();


//FECHAR NOTA
document.getElementById("closePopup").onclick = function() {
        window.close();
}

//  SALVA NOTA
 
document.getElementById("save").onclick = function() {
        let text = document.getElementById("inputText").value
        var v1 = window.name;
        var obj= {};
        obj[v1] = text;
        chrome.storage.sync.set(obj).then(() => {
                console.log(text + " Was saved in "+ window.name);
        });

}

// DELETAR NOTA

 document.getElementById("exclude").onclick = function(){
        const name = window.name
        chrome.storage.sync.remove([name], function(){
                console.log("Note Deleted");
        });
        window.close();
 }

 // MUDAR COR