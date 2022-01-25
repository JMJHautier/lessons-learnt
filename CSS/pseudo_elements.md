# Appliquer un hover

il ne faut pas écrire:
`
p::after:hover
`
mais
`
p:hover::after
`

# pseudo elements vs pseudo class

pseudo class: impacte le state d'un élément entier (par exemple, :hover)
pseudo element: impacte une partie de l'élément, par ex, ::first-letter ou ::after)

A NOTER: :after et :before sont uniquement là pour compatibilité, car au départ, il n'y avait pas de distinction element/class. Aujourd'hui, il faut utiliser ::before ::after


# ::after et ::before

- ils sont intégrés à l'INTERIEUR de l'élément, pas à l'extérieur
- inline par défaut
- on peut les utiliser, par exemple: 
  - pour ajouter des icones, par ex pour les liens externes.
  - pour ajouter des calques! Kevin Powell, before/after part 3 https://www.youtube.com/watch?v=djbtPnNmc0I&list=PL4-IK0AVhVjPBX_HelwDlNsTiyr2YGSBw&index=3
