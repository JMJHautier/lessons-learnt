# flex shrink/grow/basis

- correspond à min/max/opti (en gros... en réalité, c'est une plannification/optimisation de l'espace
- recommandé d'utiliser les trois ensembles en utilisant le shorthand flex, car ils s'entre-influencent
- si on ne veut qu'un élément reste comme il est: flex 0 0 auto . ça signifie: ne rétrécie pas, ne grandit pas, ta taille correspond à ce que tes propriétés css te fixent
- flex wrap ignore ces règles
- teste les connaissances
  https://memoria-oclock.netlify.app/deckEditor/65

- flex-grow: 1 (unitless value, donne une proportion)  flex-grow: 2 signifie "grow 2 fois plus vite")  DEFAULT/ 0
- flex-shrink: par défaut, 1!! car le but est de prendre le moins de place possible. 
resources:
flex grow/shrink/basis:
https://css-tricks.com/understanding-flex-grow-flex-shrink-and-flex-basis/

-----

flex-direction:Row-reverse etc., order:...,  attention pour l'accessibilité, car ça ne change pas l'ordre dans le html! 

# order

un peu comme z-index pour flexbox. La valeur de base est 0 


