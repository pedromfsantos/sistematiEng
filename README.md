# Smart Note

> Sistematização da matéria de Programação Orientada a Objetos, do curso de ADS do CEUB.
> Para o trabalho, foi escolhido realizar o desenvolvido de uma extensão do google chrome qque leva o nome de Smart Note.
> Seu intuito é servir um aplicativo prático e fácil de se utilizar caso se deseje realizar pequenas anotações e salvá-las, durante o uso do google chrome.

### Arquitetura

O sistema consiste em basicamente dois módulos:
- Manager (js/managerLogic.js)
- Nota (js/notaLogic.js)

Um manager pode ter várias notas, mas uma nota está associada a apenas um manager.
O manager é responsável por gerenciar a criação, exclusão e carregamento de notas salvas, e o faz ao gerenciar um vetor de Notas.
A nota, por sua vez, lida com eventos associados ao próprio objeto, como salvar, excluir (o que causa uma exlusão da nota e de seu texto do storage local) ou apenas fechar uma nota.

O sistema faz uso da API de storage do google chrome para realizar a persistência dos dados. Para fins didáticos, o tipo escolhido foi o armazenamento local.

#### Diagrama de Classe

![diagramaDeClasseimg](https://github.com/user-attachments/assets/f5a98893-7bc0-4bd8-a989-7cd0f7d42d7f)

#### Diagrama de Caso de Uso

![diagramaCasoDeUso](https://github.com/user-attachments/assets/b1f7d7d1-9366-4295-b138-42ddb2148301)

#### Telas

Existem basicamente duas telas: 

- O Menu (notasMenu.html), controlado pelo script js/controller.js

  
![tela_Menu](https://github.com/user-attachments/assets/4f70cd20-be46-4825-b3ec-3362849c0a38)

- A Nota (newNota.html), controlada pelo script js/controllerNota.js

  
![tela_nota](https://github.com/user-attachments/assets/b41a83cb-c6f2-4327-996a-6011bd0d1dd7)

Sendo que na nota, no ícone dos três pontinhos, ao passar o mouse por cima, veremos:

![tela_nota2](https://github.com/user-attachments/assets/b266b2e8-20cf-491c-84e0-9e2242c60d81)

#### Armazenamento

Como dito anteriormente, os dados são salvos utilizando a API do google [chrome.storage](https://developer.chrome.com/docs/extensions/reference/api/storage?hl=pt-br)

- Os dados são armazenados ao chamar o método 

```
chrome.storage.local.set(obj).then(() => {
  //callback function
});
```

em que obj é um dado no formato JSON, por exemplo:
     
```
{"NewWindow0":"Anotacao"}
```

- Os dados são recuperados utilizando

```
chrome.storage.local.get(null).then((result) => {
  //callback function   
});
```


Sendo que, ao passar null como parâmetro para o método get , é retornado todos os pares chaves valor em  result.
    O método também aceita a passagem de um valor de chave, e assim retornará em  result o par chave-valor associado.

- Cada nota é individualmente removida utilizando o método

```
chrome.storage.local.remove([name], function(){
  //callback function
});
```
     Em que [name] é o valor da chave que se quer remover.

- Por fim, o método que deleta todos os valores armazenados é o

```
chrome.storage.local.clear();
```

## Como Usar:

### Instalação

Para instalar a extensão, no momento, é recomendado que, ao clonar o repositório, se carregue sem compactação, a extensão no google chrome. Para fazê-lo basta:
- Clicar no ícone **Extensões**, localizado no canto superior direito do navegador.
- Clicar em **Gerenciar Extensões**
- Clicar em **Carregar sem compactação**, conforme a imagem abaixo, e selecionar a pasta ***notaExtension***:

![comousar1](https://github.com/user-attachments/assets/56baa799-5fb4-41cc-86b7-f0fad3177ad0)

Ao fazer isso, você deve ser capaz de observar a presença do Smart Note entre suas extensões. Se desejar, fixe a extensão para facilitar o uso. 

### Uso da Ferramenta

#### Criar uma nova nota:

Para criar uma nova nota, basta clicar no ícone do Smart Note, disponibilizando o menu. Assim, basta clicar em *New Note* 

![comousar2](https://github.com/user-attachments/assets/d1344ac9-395e-4c75-bd04-3e1d20ab8bfc)

Assim, uma nova nota deve aparecer em sua tela, e anotações podem ser feitas no campo destinado.

![comousar3](https://github.com/user-attachments/assets/636bbe69-401e-49f7-9295-5a238bdb7516)

#### Salvar e excluir uma nota

Para salvar ou excluir uma nota, basta passar o cursor do mouse sobre o ícone "..." que as opções irão aparecer. Basta clicar em alguma delas para executar a ação:

![comousar4](https://github.com/user-attachments/assets/f331443c-5795-4b03-a437-30b40909a4a7)

#### Abrir todas as notas salvas

O menu conta com a opção de abrir todas as notas salvas, portanto basta clicar na opção *Open Notes* que todas as notas salvas até então serão restauradas e aparecerão na tela.

![comousar5](https://github.com/user-attachments/assets/42f36544-2378-4a43-95c7-33629be2e291)

#### Deletar todas as notas

Além disso, é possível deletar todas as notas, as salvas e as não salvas que ainda estão na tela. Para tal, basta clicar, no menu, na opção *Delete Notes*

![comousar6](https://github.com/user-attachments/assets/1531f875-2f91-4f47-a941-ad58ea89be2d)

#### Fechar uma nota

Se o usuário quiser fechar uma nota sem necessariamente lidar com armazenamento, ele também pode. Isso quer dizer que pode-se fechar uma que foi nota salva, sem necessariamente deletá-la, o que a possibilita
de ser aberta, posteriormente, pelo botão *Open Notes*. Ou, caso o usuário apenas deseje fechar uma nota não salva. Para tanto basta clicar no ícone "x", presente no canto superior direito da nota

![comousar7](https://github.com/user-attachments/assets/b954798a-1195-4f85-96ec-afae2e605b9f)

> [!WARNING]
> Ao simplesemte fechar uma nota, que não tenha sido salva, pelo método demonstrado neste item, o conteúdo escrito será perdido, uma vez que ele sequer foi armazenado.

#### 
## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

