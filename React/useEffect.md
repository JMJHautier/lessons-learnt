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
// Le hook d'effet permet de définir un effet de bord pour le composant
// dans lequel il est défini.
// useEffect prend en argument :
// - le callback contenant l'effet à exécuter
// - un tableau de dépendances
// Si on ne donne pas de dépendances, l'effet est exécuté après chaque rendu du composant,
// Si on donne un tableau de dépendance, l'effet est exécuté après le premier rendu
// et si une des dépendances change
// Ainsi, un tableau de dépendance vide correspond à
// l'exécution de l'effet seulement au montage du composant.
// sans 2ème argument : componentDidMount + componentDidUpdate
// 2ème argument tableau vide : componentDidMount
useEffect(
loadPosts,
[],
);
// Dans l'exemple ci-dessous, l'effet est exécuté au montage du composant
// et après chaque rendu si le zenMode a été modifié.
// useEffect(
// loadPosts,
// [zenMode],
// );

- le concept "d'effet de bord" est important. C'est tout ce qui se passe après que les composants soient montés. React aime que bcp de choses soient gérés dans ces effets de bord, afin d'éviter des re-render à répétition (par ex, avec changement du titre ! )
