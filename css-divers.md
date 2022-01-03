- on peut faire plein de box shadow!

```css
/* Any number of shadows, separated by commas */
box-shadow: 3px 3px red, -1em 0 0.4em olive;
```

---

- les positions... fixed est vraiment à partir d'en haut à gauche, par contre, absolute se base sur son composant mère, tandis que relative se base sur sa position dans le flow.

---
z-index ne marche pas avec display:static! avec tous les autres ça marche :) 
source: https://stackoverflow.com/questions/9191803/why-does-z-index-not-work
