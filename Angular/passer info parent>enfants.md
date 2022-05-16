# créer la propriété devant contenir l'info à l'intérieur de l'enfant

il faut le décorer avec `input`pour signaler une connection avec le parent 

`@Input() maProp=''`

# ajouter un attribut à l'intérieur du parent avec un data binding

`<app-enfant [maProp]="maProp"> </app-enfant>`


# on peut ajouter un alias, mais ce n'est pas conseillé par le style guide

`@Input('maProp') aliasProp='' `
