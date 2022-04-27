# Introdução

- Documentação disponível em angular.io;
- Parceria entre Google + Microsoft;
- Open Source (código no Github);
- Uso de padrões web e Web Components;

## Blocos Principais

1. Componentes
1. Diretivas
1. Roteamento
1. Serviços
1. Template
1. Metadata
1. Data binding
1. Injeção dependência

### Components

Componente é a view, o que o usuário vê.
Junção do Template + Controller + Escopo.

Encapsula:

- Template: o código HTML que é mostrado pro usuário.
- Metadata: processamento das classes. Permitem o Angular ler as classes e fazer o processamento das mesmas.
- Dado a ser mostrado na tela (data binding): associação dos dados do componente com os componentes HTML no template.
- Comportamento da VIEW.

As aplicações no Angular são orientadas à componentes. Toda a aplicação é um componente (um componente parent/raíz/root) e este se divide em componentes menores (filho/child).

Esta componentização da aplicação faz com que ela se torne mais fácil de testar.

O principal objetivo do componente é exibir dados, logo é possível integrá-lo com um servidor backend (Node.JS, Java, .NET, Ruby, Python).

### Services

Por boa prática, não é de bom tom escrever a lógica do negócio dentro do componente. Pra isso, utiliza-se um serviço (Service) e ele é responsável pela lógica do negócio e também pela comunicação com o backend. O serviço pode ser injetado em outras classes.

### Router

É comum ter várias páginas diferentes em uma aplicação. Com o Angular, trabalha-se com o conceito SPA (Single Page Application) ou seja, aplicações de uma página só. Mesmo que a aplicação só tenha uma página, pode-se ter telas diferentes. Para transitar entre as telas, faz-se uso do Router, que é o responsável pela navegação.

### Diretiva

Responsável por modificar elementos DOM e/ou seu comportamento.