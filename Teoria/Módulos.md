# Modules

Arquivo que ajuda a organizar a aplicação e a modularizá-la. Com isso, desenvolver os diretórios para organizar melhor o código.

- NgModule: decorator do pacote angular/core
- BrowserModule: módulo que prepara a aplicação pra rodar em um browser
- FormsModule: módulo de formulário que usa a diretiva NgModel
- HttpModule: módulo com o objeto http para as requisições ajax
- CommonModule: contém das diretivas e pipes comuns, ficando disponíveis pros componentes do módulo de funcionalidade

## @NgModule

> Metadados declarados no módulo Ng

1. Declarations: lista todos os componentes, diretivas e pipes do módulo
2. Imports: outros módulos que se quer utilizar no módulo atual ou dentro de algum componente que pertence ao módulo
3. Providers: ficam os serviços e módulos de funcionalidade
4. Boostrap: qual componente que deve ser instanciado quando a aplicação é executada. Encontrado somente no módulo raíz/root

## Módulos de funcionalidade