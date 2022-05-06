# ngModel
Nécessite FormsModule, importé dans AppModule

Pour avoir un "two way data binding" (donc, par exemple, un input qui est bindé à une variable, qui elle même est affiché à l'écran)

    <input [(ngModel)]="variable">


# pipes

les "Pipes" permettent de mettre en forme string, nombres etc. Par ex: 

    <div> {{maVariable | uppercase}} </div> 
 
 ici, le uppercasePipe permet de mettre la string en majuscule.
 
 # * ngIf
 Ceci: 
 
    <div *ngIf="maVariable"> {{maVariable}} </div>
 
 est l'équivalent angular de cela: 
 
    maVariable&&<div>{maVariable}</div>
 
 # ngFor 
 
 ceci: 
 
    <li * ngFor="let hero of heroes"> {{hero.name}} </li>
 
 est l'équivalent angular de cela:
 
    const rows = []
    for(let hero of heroes) {
       rows.push(<li>{hero.name} </li>)
     }
     return rows
 
 # CSS conditionnel
 
    <button [class.selected]= "hero === selectedHero">
 
 ajoute la classe "selected" à button si la condition est remplie.
 Correspond alors à:
 
    <button class="selected">
 
 # Input
 
 le Input ressemble un peu aux props de React, sauf que comme c'est de l'OOP, on parle de **propriety binding**
 
 1) Il faut d'abord l'ajouter au @angular/core
 
2)  le préciser dans le composant recevant l'input

    @Input() maProps

3) y référer dans le template quand le composant est appelé
    <monComposant [maProps]="maProps"> </monComposant>


# Services

leur objectif est de partager des informations entre composants qui ne se connaissent pas. 

on les créé comme ça:
    ng generate service myService

Les services sont "injectés" dans l'application, dans le root par défaut. Cela signifie qu'une instance de service est créé dans le root, et servira pour l'ensemble des classes de l'application

Les services peuvent être appelés dans d'autres services. 

# Router

Angular a de base un composant "router" à la racine de /src. 

On peut y préciser les routes: 

    const routes: Routes = [
    { path: 'heroes', component: HeroesComponent }, 
    { path:'dashboard', component: DashboardComponent},
    { path:'detail/:id', component: HeroDetailComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ];
    
Dans le composant App, on appelle ce composant Router: 
    <router-outlet></router-outlet>

pour rediriger vers ces routes, on utilise l'attribut `routerLink`

    <a routerLink="/detail/12">Mon Lien </a>

on peut ensuite utiliser des services dédiés pour récupérer les paramètres, l'historique etc. 

# lifecycle hook

Angular a son propre "lifecycle hook", par ex: 
ngOnInit semble être l'équivalent d'un useEffect avec une dependency vide. 
 # vocs:
 
 Utiliser des modules =  "opt-in" des modules 
 
 
 components are DECLARED in NgModule (components are delcared only once, e.g. in the appMoule) 
 
 you define PRIVATE styles for the components (inline or in stylesheet)
 
 
 the component's TEMPLATE is its html file. 
 
 #
 
    #variable declaration

() - event binding

[] - property binding

[()] - two-way property binding

{{ }} - interpolation

* - structural directives

The # syntax can declare local variable names which references DOM objects in a template. e.g.

 <span [hidden]="harry.value">*</span>
 <input type="text" #harry>
 {{ harry.value }}

