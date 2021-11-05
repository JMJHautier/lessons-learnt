## Exemple de redirect
```javascript
const app = () => {
return
{
      (cardId && isSubmit && isModified.state) && <Redirect to={path}/>}
}
```

## Redirect en envoyant une donnée dans le state
1) props dans Redirect
```javascript
<Redirect to={{ pathname: /deckEditor/:deckId, state: { editedCardId: cardId } }}/>
```

3) récupération dans le composant "deckEditor" 

```javascript
const location = useLocation()
const editedCardId = location.state?.editedCardId
```
