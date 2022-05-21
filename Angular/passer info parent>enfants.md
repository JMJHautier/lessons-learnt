# via custom properties
## créer la propriété devant contenir l'info à l'intérieur de l'enfant

il faut le décorer avec `input`pour signaler une connection avec le parent 

`@Input() maProp=''`

## ajouter un attribut à l'intérieur du parent avec un data binding

`<app-enfant [maProp]="maProp"> </app-enfant>`


## on peut ajouter un alias, mais ce n'est pas conseillé par le style guide

`@Input('maProp') aliasProp='' `


# via content projection

permet de transmettre du HTML! 

## mettre son contenu à l'intérieur de l'élément enfant

`<app-enfant> <p> mon contenu </p> </app-enfant>`

## ajouter l'élément "ng-content" dans l'élément enfant

`<ng-content> </ng-content>`

### multi slot content projection! 

permet de spécifier l'emplacement de certains tags! 
```javascript
    <app-enfant> 
      <p> mon contenu </p> 
      <p select="top"> mon header </p>
    </app-enfant>
```

et ensuite, dans `enfant`

    <ng-content top> </ng-content> // mon header
    <ng-content> </ng-content> // mon contenu
