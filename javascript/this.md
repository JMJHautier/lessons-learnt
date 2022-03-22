# dans l'appel d'une fonction

this fait référence au contexte global. En général, ça va correspondre à window, donc:

```javascript
function truc () {
this.nouvellePropriete = "coucou"
console.log(window.nouvellePropriete)
}

truc() // renvoie "coucou"
```

**si on est en strict mode, *this* est *undefined*.**

# dans l'appel d'une méthode d'un objet

this est l'objet auquel appartient la méthode. 

** Attention! Si this est dans une "inner function", il sera de nouveau soit indéfini ou égal à window, car "The context of the inner function (except arrow function) depends only on its own invocation type, but not on the outer function's context."


```javascript
const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log(this === numbers); // => true
    function calculate() {
      // this is window or undefined in strict mode
      console.log(this === numbers); // => false
      return this.numberA + this.numberB;
    }
    return calculate();
  }
};
numbers.sum(); // => NaN or throws TypeError in strict mode
```

on peut redéfinir le contexte avec `call()` ou utiliser une arrow function pour `calculate` (car les arrow functions vont "resolve lexically")

**attention** si on sépare la méthode de son objet, on perd le contexte

```javascript
var myObject = {
  hello: function ()  {
    console.log(this)
  }
}
let alone = myObject.hello

alone(); // logue window
myObject.hello(); // logue myObject 

alone = myObject.hello.bind(myObject)

alone(); // logue myObject
```


# dans une class

this est l'objet class

# dans une fonction constructeur

this est le nouvel objet créé via new
