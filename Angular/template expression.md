# propriétés: 
## Peut être n'importe quel code de javascript

SAUF s'il implique des sides effects (donc les assignments, les operators, etc. ne fonctionnent pas). 

## prend comme contexte l'instance du component

pas la peine de mettre this quand on fait référence à des propriétés ou méthodes du component ;)

## Template expressions cannot refer to anything in the global object (They can't refer to window or document).

##  they can't call console.log() or Math.max() and they are restricted to referencing members of the expression context.


# best practices 

## use short expressions

keep application and business logic in the component

## quick execution 

les expressions sont executés après chaque change detection cycle, donc, attention : x 

## no visible side effect 
a template expression should not change any application state other than the value of the target proprety (il ne peut pas modifier, par exemple, une propriété se trouvant dans son parent. 
