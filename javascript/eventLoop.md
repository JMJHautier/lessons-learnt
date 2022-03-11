# javascript est "single thread"

Concrètement, ça signifie que JS a un seul "call stack": les fonctions s'accumulent les unes au dessus des autres en fonction de leur ordre, et sont executés du plus bas au plus haut

```javascript
const func1 = () => console.log(1)
const func2 = () => console.log(2)
const func3 = () => console.log(3)

func1(); func2(); func(3)
```
le call stack ressemblera alors à : 
```
func3
func2
func1
```

(on retrouve le callstack quand un erreur est throw, d'ailleurs!! Il est littéralement copié dans le message d'erreur)

# le browser met à disposition des API, un "event loop" et un "message/callback queue" qui rend JS asynchrone

Ajax, seTimeout etc. ne sont aps direct dans JS, mais offert par le browser. 

Quand setTimeout est traité dans le stack, ces API sont appelés et ajoute les informations nécessaire au "message queue"


quand JS n'a plus rien dans son call stack, le "event loop" regarde s'il y a des messages à traiter dans le "message queue".

concrètement, si on a `setTimeout(console.log(1), 500)`
1) il passe dans le call stack - JS appelle l'API "setTimeout" du browser et passe au prochain élément du stack. L'API "setTiemout", elle, lance de suite un timer de son coté 
2) Au bout du timer, l'API ajoute un message contenant "console.log(1)" dans le "message queue".
3) quand JS n'a plus rien dans son call stack, le event loop regarde dans le message queue et lance notre "console.log(1)" dans le call stack


Quelques remarques: 
1) il peut y avoir plusieurs API qui tournent en parallèle
2) on retrouve le callstack quand un erreur est throw, d'ailleurs!! Il est littéralement copié dans le message d'erreur
3) pour setTimeout, le "délais" est en fait un temps minimal! JS  ne regardera le message queue uniquement quand il aura terminé tout son call stack (aka, toutes les opérations synchrones). ça peut prendre plus de temps que le délai indiqué dans setTimeout, et géré par l'API!
4) Il faut bien comprendre que les API, le message/callback queue, le event loop sont données par le browser, et ne sont pas de facto dans JS! 
5) un callback n'est pas asynchrone "de base". C'est juste qu'on l'utilise souvent dans une opération asynchrone (comme setTimeout) pour avoir une fonction qui est executé de façon asynchrone


ressources: 
- video très claire: https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=1445s
- un texte qui l'est tout autant: https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript

# illustration perso:

```javascript
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1); 
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    if(this === window)
    {
      console.log(9)
    }
    else {
      console.log(9)
    }
    setTimeout(function(){console.log(3)}, 0); 
   ```
   
   le code ci-dessous va rendre: 
   ```
   1
   4
   5
   6
   7
   8
   9
   2
   3
   ```
   car: 
   - console.log(2) et console.log(3) sont dans le message queue, qui sera traité uniquemenet quand le call stack sera vide (donc après toutes les opérations synchrones)
   - console.log(2) a été ajouté au message queue AVANT console.log(3), car le délais était extrêmement court (1ms!) et que le temps que JS arrive au deuxième setTimeout, ce délais était déjà passé

