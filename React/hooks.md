# useful custom hooks?

https://www.youtube.com/watch?v=0c6znExIqRw

# général

Tous les hooks sont des fonctions
le hook useState renvoie un tableau avec 2 index. On le déconscruit pour assigner des noms de variables

MAIS pour React, ce qui compte avec les Hook, c'est l'ORDRE de déclaration; C'est ocmme ça qui les reconnait. C'est pour ça qu'on ne peut pas mettre de hooks dans des boucles, des conditionnels etc. parce que ça créé le chaos dans l'ordre.

- toujours utiliser les hooks en haut des composants. On peut les mettre dans des variables dédiés si besoin, par ex:
  ```javascript
  const dispatch = useDispatch();
  ```
  ?
