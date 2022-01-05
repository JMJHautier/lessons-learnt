# appliquer des data validation sans rendre le champ required

pas encore implanté: 

```javascript
 validate: (value) => value === '' || actualValidationLogic(value) || message
 ```
 
 https://github.com/react-hook-form/react-hook-form/issues/1781

# Champs optionnels et validation de données

React Hook Form ne permet pas facilement de valider les données avec une REGEX tout en le laissant optionnel (https://github.com/react-hook-form/react-hook-form/discussions/4270) 

Il peut être pertinent alors d'utiliser YUP.

Par exemple, voici le schema YUP pour vérifier un mot de passe: 

```javascript
const schema = yup.object().shape({
    password: yup.lazy((value) => {
      if (value === '') return yup.string().notRequired()
      else return yup.string().min(8, 'Au moins 8 caractères').max(20, 'Pas plus de 20 caractères').matches(/(?=.*[!?@#$%^&-+=()])/, 'Veuillez inclure au moins un caractère spécial(!?@#$%&*()-+=^)')
    }),
    confirmPassword: yup.lazy((value, options) => {
      if (options.parent.password) return yup.string().oneOf([options.parent.password], 'ne correspond pas')
      else return yup.string().notRequired()
    }),
    oldpassword: yup.string().required()
  })
 ```
Il faut ensutie intégrer YUP dans react-hook-form, en précisant un resolver(à isntaller séparemment:

```javascript
const { register, handleSubmit, formState: { errors, isValid, isSubmitted } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) })
import { yupResolver } from '@hookform/resolvers/yup'
```

un peu plus d'info: https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98
