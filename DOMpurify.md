# principe

enlève d'un string le html problèmatique
ne retire pas tous le html, juste ce qui est dangereux

```javascript
DOMPurify.sanitize("<image src="lien" attributechelou={<script> </script} />)
// renvoie "<image src="lien" />
```

# Purifier un objet

DOMPurify s'applique à une string. Pour l'appliquer à un objet, j'ai bricolé le code suivant:

```javascript
import DOMPurify from "dompurify";
// pour les strings
export const clean = (dirty) => {
  const cleant = DOMPurify.sanitize(dirty);
  console.log(cleant);
  return cleant;
};
// pour les objets
export const cleanObject = (
  object = { login: "login", password: "password <script></script>" }
) => {
  const mappedObject = Object.entries(object).map(([key, value]) => {
    const cleantValue = clean(value);
    console.log(cleantValue);
    return [key, cleantValue];
  });

  const cleantObject = mappedObject.reduce(
    (previousValue, currentValue) => ({
      ...previousValue,
      [currentValue[0]]: currentValue[1],
    }),
    { [mappedObject[0][0]]: mappedObject[0][1] }
  );
  return cleantObject;
};
```
