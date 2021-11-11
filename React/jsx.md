# Array

react peut render un array :-)
la syntaxe est parfois pratique, par exemple pour cette horreur:

```javascript
return (
  <div>
    {loading ? (
      <Loading />
    ) : showError ? (
      <NoMatch reason="deck-display" />
    ) : (
      [
        !loading && showOptions && (
          <div className="cardDisplay__modal">
            <Options />
          </div>
        ),

        currentCard.index <= database.length - 1 && (
          <>
            <ShowCards />
          </>
        ),

        isOver && (
          <div>
            {" "}
            <NextGame />
          </div>
        ),

        loading && <Loading />,
      ]
    )}
  </div>
);
```

source: memoria, CardDisplay
https://reactjs.org/docs/jsx-in-depth.html
