utiliser le keyword "as" pour imposer à une propriété un type qui n'est pas inclus/différent dans l'interface


C'est nécessaire, par exemple, quand on utilise l'interface prédéfini `KeyboardEvent`, et l'event a une target. 


Par défaut, KeyboardEvent ne prévoit pas de propriété "value", car celle-ci peut être indéfini si non donnée


Il faut donc utiliser le type assertion (event.target as HTMLInputElement).value pour imposer à typescript un type pour cette propriété
