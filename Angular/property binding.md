



# To bind to an element's property, enclose it in square bracket ([]) characters, which identifies the property as a target property. 

```javascript
<img alt="item" [src]="itemImageUrl">
```

src est une target property


**quand Angular voit des [], il analyse le coté droit comme une expression dynamique (et plus comme une string statique) avant d'afficher l'élément**


# désactiver un bouton

Il faut utiliser le property binding sur la propriété `disabled`

```javascript
<button type="button" [disabled]="isUnchanged">Disabled Button</button>

isUnchanged = true
```

# utiliser comme props

dans parent.component.ts:

`valueInParent='my props is great'`

dans parent.template.html
`<app-children [props] = "valueInParent"> </app-children>`

dans child.component.ts: 
`@Input() props='';`

# sécurité

property binding (ainsi que interpolation) sanitarise le contenu, et vire les tags script etc. 
