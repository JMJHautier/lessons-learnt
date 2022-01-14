- En javascript, pour les tableaux et les objets, ce qui compte c'est la référence, pas la value.

quand on écrit

```javascript
const truc = [1, 2, 3];
const item = truc;
item.push(4);
console.log(truc); // renvoie [1,2,3,4]
```

C'est du au fait que push modifie le tableau existant et n'en crée pas un nouveau (avec une nouvelle référence). Cela a un gros impact, par ex sur React, qui, pour update le DOM, va en général regarder la référence.

C'est pour ça qu'on utilise plutot le spread operator, qui CREE un nouveau tableau avec une nouvelle référence.

```javascript
item.concat(4); // équivalent à [...item, 4]
```

# lire le nom d'une fonction

on ne peut (plus) obtenir le nom d'une fonction en JS quand on est à l'intérieur.
Je voulais le faire pour rendre mes console.log plus claires :(
source: Can I get the name of the currently running function in JavaScript?https://stackoverflow.com/questions/1013239/can-i-get-the-name-of-the-currently-running-function-in-javascript

---

# javascript type juggling

javascript peut transformer des valeurs d'un type à un autre sans qu'on l'aide.
Par ex, `true` peut être convertie en integer `1`

---

# fonction fléchée

dans une fonction fléchée, this ne se comporte pas de la même manière que dans une fonction avec mot clé.
en front, t his renvoie alors à l'objet window. En back, il renvoie à un object vide.
Car il n'y a pas de contexte!

# spread syntax vs rest parameter

ont l'air exactement pareil mais font l'inverse.

le rest PARAMETER est un argument de fonction, qui va mettre l'ensemble des arguments dans un tableau.

le spread SYNTAX va "extend" un array dans ses éléments.
REST crée un array à partir d'un ensemble d'arguments

spread transforme un array (ou un string, ou un objet) en une liste d'éléments

le REST ne peut être que à la fin: 
```javascript
function myFun(a,  b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
```

# Ref à une variable dans le nom d'une propriété

-Pour faire référence à une variable pour nommer une propriété, il faut utiliser []:
exemple:

```javascript
return {
  ...state,
  user: {
    ...state.user,
    [action.stateToBeUpdated]: action.content,
  },
};
```

# Singlethread

ne pas oublier que JS est single thread... De base, JS est incapable d'executer des instructions de façon asynchrone. Il a fallu des technologies comme AJAX pour changer la donne.
