- en REACT, on préfère les champs controlés pour avoir accès au state de partout. Dans les champs controlés, le state est la seule source de vérité

- on met dans le state les données bruts qui vont être manipulés

- ne pas oublier de préciser l'attribut 'value' pour un champ controlé. Permet de reset la valeur par la suite plus facilement

========

setState() ne met pas à jour immédiatement la valeur. Il "queue up" sa modification, qui peut prendre un certain temps à être executée.

```javascript
const [value, setValue] = useState(0);
setValue(1);
console.log(value); // renvoie 0
```

il n'y a pas de méthodes pré-construites pour contourner le problème. On peut tout de même avoir la valeur finale du state avec une fonction comme suit:

```javascript
const [value, setValue] = useState(0);
setValue(1);
setValue((state) => {
  console.log(state); // renvoie 1

  return state;
});
```

source:https://medium.com/ableneo/react-setstate-does-not-immediately-update-the-state-84dbd26f67d5

=========
quand le state est mis à jour avec la même valeur, IL NE TRIGGER PAS DE RERENDER, même dans s'il est dans les depencies d'un useEffect!
(on dit que "React bail out"). C'est parce que React utilise "Object.is" (une méthode très similaire à === (sauf pour les NaN)) pour comparer, et décider d'un rerender.

J'ai contourné le problème en ajoutant un compteur, qui est mis à jour quand les valeurs ne bougent pas...
source: react doc pour useState: https://reactjs.org/docs/hooks-reference.html#usestate
MDN pour Object.is: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#description

================
Il est INTERDIT de changer directement la valeur d'une variable du state : je dois utiliser la fonction setNbUsers. Attention, "setNbUsers(nbUsers++)" va modifier la valeur de nbUsers ("nbUsers ++" est équivalent à "nbUsers = nbUsers + 1") : interdit.

====================

Quand un props ou un state change, c'est tout le composant qui contient ce props ou ce state qui change! pas juste les composants concernés!

========================

- il vaut mieux faire le reset d'une variable du state dans l'objet renvoyé par l'action. Si on le met par ex dans le handleSubmit, on peut avoir des problèmes liés à l'asynchronie.
