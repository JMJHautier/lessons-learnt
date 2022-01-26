circle: 

	border-radius:50%;


arrow: utiliser::after et ::before, puis transform: skew(0,20deg), deux fois. 



utiliser les fonctions de css plutot que des photos pour une shape! permet d'être animé



faire une bordure en demi cercle: 
```css
::before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 100px;
    clip-path: circle(50% at 0%);
    background-color: vars.$color-objects;
    transform: rotate(-180deg) translateX(100%);
    left: 0;
  }


    // clip-path: circle(50% at 0%);
    // transform: translateX(100%);
    right: 0;
    ```
