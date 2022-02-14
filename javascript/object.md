# mettre à jour un objet

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

# mapper un objet

Il n'y a pas de solutions pre-conçu. Voilà ma solution

```javascript
export const cleanObject = (object)) => {
  const objectToArray = Object.entries(object)

  const mapTheArray = objectToArray.map(([key, value]) => {
    const changedKey = key*2
    const changedValue = value*2
    return [changedKey, changedValue]
  })

  const arrayToObject = mapTheArray.reduce((previousValue, currentValue) => ({ ...previousValue, [currentValue[0]]: currentValue[1] }), { [maptheArray[0][0]]: maptheArray[0][1] })

  return arrayToObject
}
```

# Créer un array d'objet à partir d'un objet

```javascript
var data = {
    a:{"0": "1"},
    b:{"1": "2"},
    c:{"2": "3"},
    d:{"3": "4"}
};
var newArrayDataOfOjbect = Object.values(data)
// résultats: 
// data = [ 
   // {"0": "1"},
    // {"1": "2"},
    // {"2": "3"},
    // {"3": "4"}
]
```
