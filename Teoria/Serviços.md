# Services

Listagem de dados são dinâmicos e vem de um servidor.

O código inserido no componente é responsável apenas por mostrar as informações para o usuário e interagir com ele.

Como boa prática, separa-se as informações e a forma como são obtidas em uma outra classe chamada "Serviço".

O serviço é responsável por fazer a comunicação com o servidor backend (Node.JS, Java, Ruby ou diretamente com serviço de cloud como Firebase ou similares).

É ideal que todas as lógicas de negócio fiquem nos serviços.

## Classe Serviço

1. Código para CRUDs

2. Dry: don't repeat yourself
   Serviços são úteis para não repetir código.

3. 