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

=====

.focus() a besoin de l'attribut tabIndex dans l'élément concerné afin de fonctionner
tabindex = 0 signifie que l'élément peut être focused en utilisant tab au clavier
tabindex = -1 signifie que l'élément ne peut aps être focused en utilisant tab au clavier
=====

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
