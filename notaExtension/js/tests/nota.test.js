import {Manager} from './../managerLogic.js'

let arrayNota = []
let arrayNome = []

const manager = new Manager(arrayNota, arrayNome);

//Teste de criaçao de nota
test('Cria uma nota nova', () => {
    manager.createNewNote();
  expect(manager.arrayNota.length).toBe(1);
  expect(manager.arrayNome.length).toBe(1);
});