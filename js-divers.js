- En javascript, pour les tableaux et les objets, ce qui compte c'est la référence, pas la value.

quand on écrit
const truc = [1,2,3]
const item = truc
item.push(4)
console.log(truc) // renvoie [1,2,3,4]

C'est du au fait que push modifie le tableau existant et n'en crée pas un nouveau (avec une nouvelle référence). Cela a un gros impact, par ex sur React, qui, pour update le DOM, va en général regarder la référence. 

C'est pour ça qu'on  utilise plutot le spread operator, qui CREE un nouveau tableau avec une nouvelle référence.


item.concat(4) // équivalent à [...item, 4]
