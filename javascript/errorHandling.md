Pleins de façons de balancer des erreurs: 
`
    throw "An error has occurred"
    throw true
    throw new Error("I detect an error!")
    throw new SyntaxError("Your syntax is no good")
`

L'utilisation de Error / SyntaxError permet de personnaliser la propriété "name" de l'erreur. 

`
  throw new Error("I detect an error!")
`

créé l'objet: 

    `{ name: 'Error', message: 'I detect an error!' }`
