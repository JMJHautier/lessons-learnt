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

---

.focus() a besoin de l'attribut tabIndex dans l'élément concerné afin de fonctionner
tabindex = 0 signifie que l'élément peut être focused en utilisant tab au clavier
tabindex = -1 signifie que l'élément ne peut aps être focused en utilisant tab au clavier

---

- on ne peut pas utiliser le spread operator pour mettre à jour un objet précis dans un array.
  Il faut mapper

```javascript
const updatedTask = tasks.map((task) => {
  if (parseInt(task.id, 10) === parseInt(id, 10)) {
    return { ...task, done: !task.done };
  }
  return task;
});

this.setState({ tasks: updatedTask });
```

---

# lire le nom d'une fonction

on ne peut (plus) obtenir le nom d'une fonction en JS quand on est à l'itnérieur.
Je voulais le faire pour rendre mes console.log plus claires :(
source: Can I get the name of the currently running function in JavaScript?https://stackoverflow.com/questions/1013239/can-i-get-the-name-of-the-currently-running-function-in-javascript

---

# Operator precedence

une notion intéressante, qui clarifie dans quel ordre les opérateurs sont évalués.
quelques sous notions clés:
**precedence**
tous les operators sont hierarchisés dans un ordre de "précédencee". Par ex, `*` a une plus haute précédence que `+`.
Mais parfois, la précédence est la même, ou alors il y a des groupes faits avec des parenthèses(met la précédence au max), et dans ces cas, il faut regarder la notion suivante pour bien comprendre ce qui se passe:
**associativity**
si `a OP1 b OP2 c`

- right-associativity signifie que a OPA1 (b OP2 c)
  exemples de right-associativity: `=` (assignemnt operators) `? : `(ternay operators),
- left-associativity signifie que `(a OPA1 b) OP2 c`
  exemples de left-associativity: les arithmetic operators (`+ - \* etc.`), `<, <=, >`
  MAIS attention, quelque soit l'associativity, l'évaluation des éléments se fait toujours de gauche à droite, ce qui nous amène à la notion suivant....

**short-circuting**
le fait d'arrêter net une évaluation si l'expression de gauche est falsy/trusy (selon l'opérateur)
par ex, `&&` short-circuite la sub expression à droite, si celle de gauche est falsy, et renvoie l'expression de gauche
autres exemples de short-cuiting: `||` `??` `a?.bc`

---

# cloner un array

ma préférée:

```javascript
const copie = Array.from(original);
```

Autres options

```javascript
const copie = [...original];
```

```javascript
const copie = original.slice();
```

source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/

---

# comma operator

"returns the value of the last operand". les operand précédent sont executés mais pas retournés, donc par ex:

```javascript
const test = (2, 3) //renvoie 3. A noter que les parenthèses sont nécessaire, car le comma a la precedence la plus faible!! sans parenthèse, const test = 2
const test2 = console.log(1), console.log(2), 3 // imprime dans la console 1 puis 2. test2 Retourne 3
```

l'utilité est pas évidente. ça a du sens quand on met une série d'inscruction, par ex:

```javascript
for (var i = 0, j = 10; i <= j; i++, j--) {
  console.log(i * j);
}
```

mais ça peut aussi s'écrire

```javascript
for (var i = 0, j = 10; i <= j; i++) {
  console.log(i * j);
  j--;
}
```

"you need to understand the comma, but you probably don't need to use it. What really matters is that you don't confuse the many other uses of the comma with the comma operator."

source: https://www.i-programmer.info/programming/javascript/6524-the-confusing-comma-in-javascript.html

---

# javascript type juggling

javascript peut transformer des valeurs d'un type à un autre sans qu'on l'aide.
Par ex, `true` peut être convertie en integer `1`

---

# shuffle un array

```javascript
for (let i = randomDatabase.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [randomDatabase[i], randomDatabase[j]] = [
    randomDatabase[j],
    randomDatabase[i],
  ];
}
```

source: memoria / pickOrder()
aussi: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

---

# fonction fléchée

dans une fonction fléchée, this ne se comporte pas de la même manière que dans une fonction avec mot clé.
en front, t his renvoie alors à l'objet window. En back, il renvoie à un object vide.
Car il n'y a pas de contexte!

# spread syntax vs rest parameter

ont l'air exactement pareil mais font l'inverse.
le rest PARAMETER est un argument de fonction, qui va mettre l'ensemble des arguments dans un tableau
le spread SYNTAX va "extend" un array dans ses éléments.
REST = de liste d'éléments à array
spread = d'array à liste d'éléments
le REST ne peut être que à la fin
=======

---

# axios et fetch

différences principales entre axios et fetch:

- permet de se passer de .json (ça parse automatiquement) -json = javascript object notation
- permet de tout mettre en options sans séparer url
- permet de plus facilement 'abort' la requête si elle n'obtient pas de réponse

# DOMPurify

- ne pas oublier d'utiliser DOMPurify pour éviter les attaques XSS!!

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
