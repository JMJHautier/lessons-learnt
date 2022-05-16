permet de préciser que plusieurs variables/arguments ont le même type, sans préciser ce type. Par ex:

    function identity<T>(arg: T): T {
        return arg;
    }

arg peut être n'importe quoi, mais dans tous les cas, la fonction retournera le même type que arg

On peut avoir plusieurs generics: 

      function identities<T, U>(arg1: T, arg2: U): T {
         return arg1;
      }

Pour définir un générique quand on l'utilise dans une instance / invocation, 

    `identities<string>("hello")`
