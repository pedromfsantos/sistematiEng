import {Manager} from './../managerLogic.js'
import nota from './../notaLogic.js'

let arrayNota = []
let arrayNome = []

const manager = new Manager(arrayNota, arrayNome);
// ########################### Criação de mocks ##################################################
const get = jest.fn().mockImplementation(() => Promise.resolve({"NewWindow0":"Anotacao", "NewWindow1": "Anotacao1", "NewWindow2": "Anotacao"}));
const set = jest.fn().mockImplementation(() => Promise.resolve());
const clear = jest.fn().mockImplementation(() => true);
const open = jest.fn().mockImplementation(() =>  {return janelaMock})
const close = jest.fn().mockImplementation(() =>  true)

global.janelaMock = {
  close
}

global.chrome = {
  storage: {
    local: {
      set,
      get,
      clear
    }
  }
}

global.window = {
    open,
    close
}

// global.windowNote = {
//   close
// }

// ####################################### Testes #######################################

//Teste de criaçao de nota
test('Cria uma nota nova', async() => {
  //spy = jest.spyOn(chrome.storage.local, 'get');
  await manager.createNewNote();
  //console.log(manager.arrayOfNotes.length)
  expect(manager.arrayOfNotes.length).toBe(1);
  expect(manager.vectorOfNames.length).toBe(1);
});

test('Mock possui 3 notas salvas. Abre todas as 3 notas salvas e conta o vetor com a ultima aberta', async() => { //O mock de get considera que existe uma nota ja na memória
  //spy = jest.spyOn(chrome.storage.local, 'get');

  await manager.openAllNotes();
  //console.log(manager.arrayOfNotes.length)
  expect(manager.arrayOfNotes.length).toBe(4);
  expect(manager.vectorOfNames.length).toBe(1); /// logica do vector name é para controlar nome apenas de novas janelas não salvas ainda
});

test('Deleta todas as notas', async() => {
  //spy = jest.spyOn(chrome.storage.local, 'get');
  await manager.deleteAllNotes();
  //console.log(manager.arrayOfNotes.length)
  expect(manager.arrayOfNotes.length).toBe(0);
  expect(manager.vectorOfNames.length).toBe(0);
});


