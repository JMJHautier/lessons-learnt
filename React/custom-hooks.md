- exemple de custom hook:

```javascript
import { useState, useEffect } from "react";

/* eslint-disable import/prefer-default-export */
// Un hook custom est une fonction
// qui utilise d'autres hook pour définir une logique réutilisable.
//
// On définit les paramètres de notre fonction en analysant la manière dont
// on souhaite configurer notre traitement
export const useApiData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        console.log("erreur");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Les données retournées par notre custom hook
  // Corresponde aux données qui seront utiless dans le composant
  // Suite à l'exécution de notre traitement
  return [data, loading];
};
```

on peut ensuite l'appeler comme suit:

```javascript
const [posts, loadingPosts] = useApiData(
  "https://oclock-open-apis.vercel.app/api/blog/posts"
);
const [categories, loadingCategories] = useApiData(
  "https://oclock-open-apis.vercel.app/api/blog/categories"
);
```
