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
