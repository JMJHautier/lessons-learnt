# De quoi est fait un token: 
Le token est une signature unique généré lors du login via la bibliothèque JWT. C’est une suite de charactères contenant un header (annonçant le type et l’algorithme utilisé), un payload (contenant le claim. Dans notre cas, cela inclut par exemple une limite de temps !), et enfin la signature en elle-même (qui assure l’intégrité du token).
