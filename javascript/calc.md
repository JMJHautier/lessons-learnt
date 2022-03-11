# floating point precision

`0.1 +0.2 == 0.3` renvoie false. C'est particulier à JS et c'est parce que JS gère les chiffres avec "floating point precision".

J'ai pas compris à quoi ça correspond. Mais ce qu'il faut retenir: 
- pour les entiers, pas de problème
- pour les décimals, le résultat est dure à prévoir
