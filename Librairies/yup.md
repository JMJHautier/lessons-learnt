# rendre un champ optionnel tout en gardant des validations complexes

En gros, utiliser yup.lazy(), pour créer un callback:
https://codedaily.io/tutorials/How-to-Create-an-Optional-Dynamic-Validation-Schema-based-on-a-Value-with-the-Yup-Validation-Library

# yup.ref('key') 

ref permet de récupérer les données d'autres variables du schema.
MAIS ATTENTION ça ne marche pas dans lazy, car ref renvoie une référence, pas une valeur
https://github.com/jquense/yup/issues/878

# Comparer un string avec une autre string contenu dans une variable

Je n'ai pas trouvé la façon de faire avec yup.string().match() qui utilise des REGEX.
Une solution pour dépanner: utiliser yup.oneOf([]), qui est normalement fait pour comparer avec plusieurs strings, mais ça marche très bien avec un seul élément de l'array ;) 
Exemple pour un champ de confirmation de mot de passe:
```javascript
    confirmPassword: yup.lazy((value, options) => {
      if (options.parent.password) return yup.string().oneOf([options.parent.password], 'ne correspond pas')
      else return yup.string().notRequired()
    }),
 ```
