# gestion d'erreur

plein de façon de faire.

L'info importante, c'est que les status code ne renvoie pas des exceptions, et ne provoquent donc pas le catch
Il faut, soit balancer l'exception manuellement, soit faire une conditionelle dans le catch. Par ex: 
```javascript
const createDeck = async () => {
        try {
          const request = await fetch(`${back}/deck/`, options)
          const response = await request.json()
          const { deckId, status } = response
          if (request.ok) {
            console.log(`deck ${deckId} ${status}`)
            store.dispatch({ type: FETCH_USER_DECKS })
          } else {
            throw response
          }
        } catch (error) {
          console.log('no deck for you!')
          store.dispatch({ type: SET_ERROR, message: error })
        }
      }
``` 
