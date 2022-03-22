# C'est quoi le prototype?
C'est une propriété présent dans tout object javascript. On peut y accéder manuellement avec `Objet.getPrototypeOf()`mais c'est pas très utile, car JS fait le job pour nous:
>When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

# Attention aux modifications de prototypes !

https://flaviocopes.com/javascript-why-not-modify-object-prototype/

# constructeur

chaque fonction a une propriété "prototype" qui est utilisé quand elles sont invoqués comme constructeur

Mais attention! cette propriété est inexistante pour les arrow functions, qui ne peuvent donc pas être constructeur

```javascript
  
    const func = () => {
      console.log("hello")
    }
    console.log(func.prototype)// undefined
    console.log(Object.getPrototypeOf(func)) // l'élément suivant dans le prototype chain ;) 

  {
  function sayHello() {
    console.log('hello');
  }
  
  console.log(sayHello.prototype);// constructeur
  ```
