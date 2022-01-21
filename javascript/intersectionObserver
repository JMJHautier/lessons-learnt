c'est génial! j'avais essayé d'avoir des onscroll events en utilisant scrollY, clientHeight etc. mais ça ne marchait pas. 

intersectionObserver est extrêmement puissant et intuitif. 

la MDN est très claire quoi qu'un peu aride: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

pour un exemple, voir Kevin Powell. 


Un truc important à retenir: l'option "threshold" détermine la régularité à laquelle le handler est fired! quand on y met une simple string, on s'intéresse plutot au booléen isIntersect, quand on y met una rray de valeur, on s'interesse plutot à la progression du ratio.
Aussi: Threshold: 0 signifie que isInteresect est true dès qu'il y a le moindre bout de l'élément observé. 1 exige que 100% de l'élément observé est dans le viewport. 
