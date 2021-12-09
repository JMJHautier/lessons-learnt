# le src des images n'est pas directement dangereux

le browser lira uniquement les liens menant à des fichiers dont le MIME est une image.
Cela dit, il y a des vulnérabilités s'il y a invocation d'un svg, car un svg implique l'utilisation d'un parser:
source:
https://security.stackexchange.com/questions/135513/what-could-an-img-src-xss-do/135518
