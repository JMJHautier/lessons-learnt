# classes are functions for creating objects

# public et private

- existent uniquement avant compilation (pas un moyen de sécurisation)
- indiquent aux développeurs quelles variables sont dispo uniquement dans la classe (private) et celles accessibles en général (public)

- les propriétés sont public par défaut
- à l'intérieur du constructor, il faut toujours préciser private/public, sinon, pas d'intialisation
```javascript
class MyClass {
constructor(public property1)
}
```
est l'équivalent de

```javascript
class MyClass {
property1;
}
```


# constructor

Quand faut-il mettre quelque chose dans le constructor? 

`If something does not rely on an argument then it does need to be in the constructor.`

`Defining the property outside the constructor is new class field syntax. If you need to support older browsers, either use the constructor method, or use Babel to transpile the code first down to older syntax.`
