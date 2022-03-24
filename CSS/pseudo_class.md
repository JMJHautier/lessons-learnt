Les pseudo classes séléctionnent des éléments sous des conditions particulières

# nth-child

* attention, nth-child séléctionne l'élément lui même (en fonction de sa position dans l'arbre), pas ses enfants
Ainsi dans un code: 
```html
<div>
   <ul>
     <li>
      <li>
      <div>
      </div>
    </ul>
 </div>
```
`ul:nth-child(2)` ne va RIEN séléctionner car n'y a pas de ul qui soit le deuxième enfant d'un élément.

 * :nth-child regarde uniquement la position dans l'arbre - en comptant tous les descendants, quelque soit leur élément
 Ainsi, dans
 ```html
<ul>
      <li>
      <li>
      <div>
      </div>
      <li>
        <li>
   </ul>
```   
   `li:nth-child(2)` ne va RIEN séléctionner car il n'y a aucun li qui est le deuxième enfant de quoi que ce soit. 

* `li:nth-child(2n+3)` signifie: sélectionne un li-enfant sur deux, à partir du troisième enfant, soit: 
 2x0 +3 =3 - le troisième li-enfant
 2x1+3 = 5 - le quatrième li-enfant
 2x2+3 = 7  - le septième li-enfant
 

   
# not()

negation pseudo-class! Compte pareil que les autres pseudo class dans la spécificité

* peut se combiner avec d'autres pseudo classes: 
   div:nth-child(2):not(:first-of-type) /* selectionne les divs qui sont deuxième enfant à condition qu'ils ne soient pas le premier de leur type */
* les not() ne peuvent pas être nestés 

# first-of-type

* selectionne le premier de type **parmi des frères et soeurs** ! ça s'applique donc à chaque niveau de l'arbre, à chaque branche

