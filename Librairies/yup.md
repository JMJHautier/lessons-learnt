# rendre un champ optionnel tout en gardant des validations complexes

En gros, utiliser yup.lazy(), pour créer un callback:
https://codedaily.io/tutorials/How-to-Create-an-Optional-Dynamic-Validation-Schema-based-on-a-Value-with-the-Yup-Validation-Library

# yup.ref('key') 

ref permet de récupérer les données d'autres variables du schema.
MAIS ATTENTION ça ne marche pas dans lazy, car ref renvoie une référence, pas une valeur
https://github.com/jquense/yup/issues/878
