# Créer un EventEmitter chez l'enfant

le EventEmitter est un objet qui a une méthode "emit()" et une méthode "subscribe()"

Il faut le décorer avec `@Output` pour indiquer que l'événement pourra être écouté par le parent

# Emettre les données devant être passé aux parents

`EventEmitter.emit(data)` fait l'affaire

# Ecouter dans le parent, et récupérer data

Dans l'appel au composant enfant, ajouter une gestion d'événement matchant le nom du EventEmitter. Les données sont contenus dans l'objet `$event`qui est passé
