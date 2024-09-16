import {Nota} from './notaLogic.js'
import {Manager} from './managerLogic.js'
//import { getManager } from './controller.js'

// ###################### NOTAS #####################



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
        chrome.storage.local.set(obj).then(() => {
                console.log(text + " Was saved in "+ window.name);
        });

}

// DELETAR NOTA

 document.getElementById("exclude").onclick = function(){
        const name = window.name
        chrome.storage.local.remove([name], function(){
                console.log("Note Deleted");
        });
        window.close();
 }

window.addEventListener("beforeunload", checkText())

function checkText(){

        chrome.storage.local.get(null).then((result) => { 
                var allKeys = Object.keys(result)
                var allText= Object.values(result)
                console.log("todas as chaves " + allKeys)
                console.log("todos os texto " + allText)
                if (window.name in result) {
                        document.getElementById("inputText").value = result[window.name]
                }
        })
       
}

 // MUDAR COR