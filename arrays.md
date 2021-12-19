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
