# avoir un background derrière une police

en utilisant:

background-clip: text;
color:transparent;
background-img: url("image");

on peut mettre une image sous une font. 

# background-size / object-fit

background-size est pour les images importés via la propriété background

object-fit est pour les images avec un tag img

J'ai pas mal cherché l'équivalent de "object-fit:fill" pour background-size, c'est à dire stretcher l'image pour qu'elle remplisse l'espace dispo. 

En fait, il suffit d'utiliser les pourcentages:

background-size: 100% 100%; 

