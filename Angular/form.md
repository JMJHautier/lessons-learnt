# Créer un formulaire

`<GroupForm>` contenant des `<FormControl>`

Attention! GroupForm attribue un type différent à FormControl! Il vaut mieux définir les FormControl en dehors de groupForm (voir plus bas)

# Validation:

Utiliser un array de Validators

 dans formControl, il y a les propriétés "touched" et "dirty" pour savoir quand le formulaire a été modifié (pour afficher des messages d'erreurs)
  
  les messages d'erreurs peuvent être affichés avec un *ngIf**


# Exemple Formulaire: 
  
**template**
```html
<form [formGroup]="registerForm" (ngSubmit)="register()">

<input
  [formControl]="control"
  [type]="type"
  [placeholder]="placeholder"
  [mask]="format"
/>    
    <label class="inline-block mb-2">Email</label>
<input
  [formControl]="control"
  [type]="type"
  class="block w-full py-1.5 px-3 text-gray-200 border border-gray-400 transition duration-500 focus:outline-none rounded bg-transparent focus:border-indigo-400"
  [placeholder]="placeholder"
  [mask]="format"
/>
  
        <p
    *ngIf="control.touched && control.dirty && control.errors?.required" // on vérifie si: il y a des erreurs, le formulaire a été touché, le formulaire a été modifié
  >
    Field is required
  </p>
</form>
```

**class:** 
```javascript
  name = new FormControl('', [Validators.required, Validators.minLength(3)])
  email= new FormControl('', [Validators.required, Validators.email])
 
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
  });
```

  
  # intégrer un masque dans les input
  
  utiliser la librarie ngx-Mask. ne pas oublier la propriété `dropSpecialCharacters` pour éviter que les special characters soient pris enc ompte dans les limites de charactères

  
  # ngSubmit
  
  comme (submit) sauf qu'elle prevent.eventDefault() (donc on l'utilise)
 
 
 # template form
 
 une façon de créer des formulaires qui sont paramétrés presque exclusivement à l'intérieur du template
 
 ## FormGroup 
 les template form sont générés via la directive `ngForm`. Cette directive est appliquée automatiquement à tous les <form> quand le `FormModule` est importée.
 
Elle crée un `FormGroup`, comme les reactive forms, avec les mêmes propriétés.
 

 ## FormControl
 
 ngModel crée un FormControl (comme dans ReactiveForm)
 
 ## validation
 
 Les validations passent à travers les tags HTML 5, que angular reconnait et supplante ensuite.
  **ne pas oublier l'attribut "name" à l'input concerné!** 

 ## exemple: 
 
 ```html
 <input
      #email="ngModel"
      type="email"
      name="email" // ne pas oublier le name! 
      [(ngModel)]="credentials.email" // string vide, déclaré dans la class"

      required
      pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" // attention au format du pattern (supprimer les /...) 
    />
 ``` 
