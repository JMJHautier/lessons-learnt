# alléger/assombrir une couleur

```css
@use "sass:color";

$color-confirm-light: color.adjust($color-text-alt, $lightness: 5%);
$color-confirm-light: color.adjust($color-text-alt, $blackness: 5%);
```


# mixin modal

```css
@mixin modal {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: rgba(230, 230, 230, 0.8); /* Black w/ opacity */
  overflow: auto;
  //   color: white;

  &__container {
    position: absolute;
    background-color: vars.$color-main;
    border-radius: 25px;
    width: 380px;
    top: 10%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 2em;
    overflow: hidden;
    align-items: center;
    filter: drop-shadow(0px 8px 8px lighten(black, 50%));
  }
```

# mixin avec paramètres et valeur par défaut:

```css
@mixin cardMobile(
 $width: 12.5em,
 $height: 15em,
) {
 .card {
   width: $width;
   height: $height;
   }
```

# appeler un mixin avec seulement un paramètre parmi plusieurs

Il faut faire référence au dit-paramètre: 
le mixin: 
```css
@mixin propertiesGridLayout($clNumber: 2, $clWidth: 1fr, $gridGap: $padding) {
  display: grid;
  grid-template-columns: repeat($clNumber, $clWidth);
  grid-template-rows: auto;
  grid-column-gap: $gridGap;
}
``` 

l'appel du mixin avec 1 paramètre sur 3: 
```css
@include side-data-layout.propertiesGridLayout($gridGap:3.5rem);
```
