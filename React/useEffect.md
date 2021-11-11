useEffect est déclenché après la phase de render.
On peut donc y utiliser document.getElement... etc. pour récupérer des éléments du DOM (et les mettre en focus par ex)

==========
si on veut render quelque chose avant useEffect, tout en gardant un peu de controle sur le nombre de fois où c'est render,
je vois 2 solutions:

- faire un composant séparé, qui est monté avant le composant qui nous pose problème
- utiliser les props, car
  "props modified -> render takes place -> useEffect block is executed."
  https://stackoverflow.com/questions/63711013/how-to-trigger-useeffects-before-render-in-react

======
