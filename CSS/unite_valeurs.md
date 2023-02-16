# fit-content min-content max-content

par défaut, le div a une width de "auto", c'est à dire qu'il stretch au maximum

on peut l'adapter au contenu via 3 propriétés:

width: min-content;

va adapter le width au strict minimum, quitte à avoir le texte sur plusieurs lignes


width:max-content;

va adapter le width au maximum du texte proposé. PROBLEME: cela bloque le wrapping


width:fit-content; 

essaye d'appliquer max-content autant que possible, mais s'il manque d'espace, va wrapp


# Percentage

en général, ils ont besoin d'une référence défini absolument.
Par ex, le % d'un min-heigh ne marchera pas: 
https://stackoverflow.com/questions/58548583/why-does-height-100-on-a-child-element-not-apply-when-the-parent-element-has-a


# vw et vh

Attention, vw ne prend pas en compte la scrollbar, peut créer un horizontal scrolling indésirable

vh a un problème similaire sur mobile: la barre d'URL n'est pas prise en compte, ce qui peut faire planter la layout. Solution: utiliser svh ou dvh! 

Ils ont un support pas encore total, donc c'est bien d'écrire, par ex: 

height:100vh;
height:100svh;

éviter d'utliser vw pour les fonts: ne s'adaptent pas au zoom ! peut être utile dans les clamp. 

font-size: clamp(3rem, 5vw+1rem, 6rem);
