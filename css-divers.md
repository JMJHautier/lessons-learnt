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

---
# Variables dans CSS vanilla?

en fait, ce sont plutot des propriétés, mais ça marche!
```css
html {
  --color-text: black;
  --color-background: lightgray;
  --color-primary: rebeccapurple;
  --gutter: 16px;
}
p {
  color: var(--color-text);
  margin-bottom: var(--gutter);
}
.title {
  color: var(--color-primary);
}
```

plus d'explications pour les rendre globales: 
https://www.joshwcomeau.com/css/css-variables-for-react-devs/


# Unités

# min max clamp

min(50%, 700px): va choisir la plus petite de ces valeurs. 
max(50%, 700px): va choisir la plus grande de ces valeurs
clamp(300px, 50%, 800px): mini, idéal, max

exemple pour un titre: clamp(2rem, 5vw, 5rem)

Attention, en faisant ça avec des margins et borderbox, on a parfois des droles de suprises (composant devenant de plus en plus petits... 

# Position absolute

Une position absoltue se situe toujours **par rapport à l'ancêtre le plus proche ayant position:relative**!
attention, par défaut, les composants sont en position:static! il fautdra donc le préciser!! c'est la différence avec position:fixed, qui se positionne par rapport à root.
A noter que position:relative se positionne par rarpport  à lui même, en restant dans le flot du doc: 
https://css-irl.info/finding-an-elements-nearest-relative-positioned-ancestor/
https://developer.mozilla.org/en-US/docs/Web/CSS/position
