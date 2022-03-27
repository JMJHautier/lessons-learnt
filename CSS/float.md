
# **A utiliser uniquement pour "wrapper" un élément html autour d'une image ou d'un contenu.** 

C'est ce pour quoi c'était fait au départ. Aucune propriété permet de le faire exactement comme ça, apparemment
![image](https://user-images.githubusercontent.com/13255701/160279600-9924531e-5158-46e5-8f68-66c6e855bb23.png)

**Ne pas utiliser pour les layout** - flexbox et grid font du bien meilleur boulot dans ce domaine.



# Si il n'a que des enfants-float, le parent collapse

![image](https://user-images.githubusercontent.com/13255701/160279658-1404db5d-ceac-42e4-aa63-4e52d84d47a2.png)

encore une bonne raison de pas faire de layout avec è_é


# Utiliser clear 

Clear explique comment un élément doit se comporter face à un élément qui "float".

`clear:right` l'élément est poussé sous l'élément qui float à droite (si l'élément float à gauche, il se comporte comme si clear:none)

`clear:left` pareil, mais pour les float à gauche

`clear:both` l'élément est poussé sous l'élément float, qu'il float à droite ou à gauche

