# OnInit

bon endroit pour "fecth" les données initiales d'un composant

bon endroit pour utiliser les input properties (celles data bounded). L'alternative, c'est onChanges, mais onChanges est appelé plein de fois, alors que ngInit n'est appelé qu'une seule fois.


# OnChanges 

à chaque changement de bound properties. Puissant mais très lourd

# DoCheck

après Init et chaque onChanges - doit e^tre utilisé pour checké des propriétés qui ne seraient pas checké par angular

# OnDestroy

à la destruction...



Il y a ensuite tous les hooks liés aux **enfants**

## AfterContentInit

quand `ng-content` est initialisé

## AfterContentChecked
## AfterViewInit
## AfterViewChecked
