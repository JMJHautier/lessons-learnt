# structural directives
ajoute ou enlève des éléments du DOM

## ngTemplate

ajoute un élément qui reste caché (commentaire) mais reconnu par angular
Peut être zappé en ajoutant un *.

 "*" dans angular provoque deux choses:
- ajout d'un wrapper ng-template (donc, rend possible l'utilisation de structural directives)
- mène à l'évaluation de la partie droite (donc, évite d'utiliser les [])


# attribute directives

impacte un seul élément en changeant son apparence dans le DOM

## ngClass

fonctionne exactement comme le package classNames pour react. On passe un objet avec
{
nomDeLaClasseAajouter: Booléen(indiquant si oui ou non la classe doit être ajouté)
} 
