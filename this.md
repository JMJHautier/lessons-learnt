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
