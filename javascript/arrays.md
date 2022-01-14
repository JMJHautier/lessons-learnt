# swap des valeurs avec le destructuring JS

let a = 'b', b = 'a'

[a, b] = [b, a] // maintenant, a = 'a', b = 'b'
source: https://dmitripavlutin.com/swap-variables-javascript/

# vérifier qu'un objet est présent dans un array

renvoyer true si c'est le cas, false sinon.

```javascript
const isMyObjectInMyArray = myArray.some(
  (index) => index.propriete1 === myObject.propriete1
);
```

# compter les occurences d'une valeur dans un array

filtrer l'array sur la base de cette valeur, puis regarder son length.

```javascript
const numberOfCorrect = database.filter(
  (card) => card.response === "correct"
).length;
```

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

# avoir les éléments paires uniquement dans un array

utiliser le % avec filter!
const newArrray = oldArray.filter((element, index) => index%2 === 0)
