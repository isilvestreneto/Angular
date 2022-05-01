# Diretivas

São formas de passar instruções pro template (código HTML).

Exemplo de diretiva:

Um loop for no template.

`
<ul>
<li *ngFor="let curso of cursos">
{{curso}}
</li>
</ul>
`

Itere todos os cursos, e a cada interação, atribua o valor do elemento atual à uma variável curso. Replique também o elemento <li> com o valor da variável curso a cada iteração.

### Diretivas são Instruções
Os componentes são diretivas com templates.

Crie um componente do Tipo (classe) especificado e renderize a view (template) desse componente nesse lugar.

### Diretivas estruturais
São utilizadas para modificar a estrutura do DOM e/ou código HTML.

Exemplo: *ngFor ou *ngIf

### Diretivas de atributos
Interagem com o elemento em que foram aplicadas.

Exemplo: ng-class ou ng-style.