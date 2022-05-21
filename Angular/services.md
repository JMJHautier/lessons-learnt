le "model" du MVC Angular. On doit y mettre les données, en particulier celles devant être partagées entre plusieurs composants

Ne pas les confondre avec un state management library, même si comme eux, les services permettent de partager globalement des données


# comment "injecter" les données des services

possible à trois niveaux:
  ## au niveau global
  
  à l'intérieur du service lui même: 
  
  ```javascript
  @Injector({providedIn:'root})
  
  ```
  ## au niveau d'un module
  ```javascript
  @Module({
  providers:[MyService]
  })
  ```
  
  ## au niveau d'un composant
  ```javascript
  @Component({providers:[MyService]})
  ```
