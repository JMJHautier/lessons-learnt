# axios et fetch

différences principales entre axios et fetch:

- permet de se passer de .json (ça parse automatiquement) -json = javascript object notation
- permet de tout mettre en options sans séparer url
- permet de plus facilement 'abort' la requête si elle n'obtient pas de réponse
- permet de configurer le lancement d'exception en fonction du code renvoyé par l'API (les statuts 500 ne provoque pas d'excpeption avec fetch)
  https://axios-http.com/docs/handling_errors

# gestion d'erreur

plein de façon de faire.

L'info importante, c'est que les status code ne renvoie pas des exceptions, et ne provoquent donc pas le catch
Il faut, soit balancer l'exception manuellement, soit faire une conditionelle dans le catch. Par ex:

```javascript
const createDeck = async () => {
  try {
    const request = await fetch(`${back}/deck/`, options);
    const response = await request.json();
    const { deckId, status } = response;
    if (request.ok) {
      console.log(`deck ${deckId} ${status}`);
      store.dispatch({ type: FETCH_USER_DECKS });
    } else {
      throw response;
    }
  } catch (error) {
    console.log("no deck for you!");
    store.dispatch({ type: SET_ERROR, message: error });
  }
};
```
