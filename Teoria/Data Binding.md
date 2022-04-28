# Data Binding

É uma forma de associar informações que estão no componente para o template e vice-versa.

1. Interpolação
{{valor}} de um atributo ou um método e imprimir a saída da informação no template.

2. Property bind ou Bind de propriedade
Saída de um atributo do componente para um template.

3. Event binding ou Binding de evento
Recebe-se um evento no template (clique, foco, etc) e executa-se um método no componente

- Valor do component para o template
- Usa-se colchetes
- Formato padrão é através de bind-nomePropriedade
- Quando não existe uma propriedade no elemento, usa-se [attr.colspan]

4. Two-Way Data Binding
Consegue-se manter tanto o template como o componente atualizados ao mesmo tempo, útil em casos de formulário, por exemplo.