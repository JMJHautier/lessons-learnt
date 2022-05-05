# privé / public

Il y a un fichier css public qui s'applique à toute l'application: 

  src/styles.css

les fichiers css à l'intérieur des modules, par ex :

  src/app/app.component.css
  
 sont propres au composant et n'affectent pas les autres composants qui lui sont extérieures
 
 MAIS ils impactent quand même leurs composants enfants (e.g. ceux qui sont déclarés dans leur ngModule(?) ) 

# modularisation

contrairement à React, les styles ne sont pas réunies dans un seul grand fichier css qui est accessible partout.

