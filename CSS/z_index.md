# stack context

z-index fonctionne en fonction des **stack context**! Pour que z_index fonctionne sur un élément, il faut que: 
- il appartienne à un stack context
- les éléments avec lesquels il interagit appartiennent au même stack context et utilise z-index

les stack context sont créés quand l'élément a les propriétés css suivantes: 

- opacité avec une valeur inférieur à 1
- position fixed ou sticky (mais pas besoin de z-index alors) 
- z-index si c'est un enfant d'un display:flex ou display:grid container
- transform, filter, clip path, perspective
- isolation: isolate (crée un contexte 'pur', aucun autre effet)

source: https://www.joshwcomeau.com/css/stacking-contexts/
