# Créer un formulaire

<GroupForm> contenant des <FormControl>

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
  class="block w-full py-1.5 px-3 text-gray-200 border border-gray-400 transition duration-500 focus:outline-none rounded bg-transparent focus:border-indigo-400"
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
    *ngIf="control.touched && control.dirty && control.errors?.required"
    class="text-red-400"
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
