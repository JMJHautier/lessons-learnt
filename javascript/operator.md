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
