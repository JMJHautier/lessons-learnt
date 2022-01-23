# Lazy loading avec getBoudingClientRect

```html
<img data-lazy="img/cow.jpeg">
``` 
A noter que 'data-lazy' est juste un attribut custom, on pourrait mettre autre chose...

```javascript
const targets = document.querySelectorAll('img');

window.addEventListener('scroll', (event) => {
    targets.forEach(img => {
        const rect = img.getBoundingClientRect().top;
        if (rect <= window.innerHeight) {
            const src = img.getAttribute('data-lazy');
            img.setAttribute('src', src);
            img.classList.add('fade');
        }
    })
})
```
**Problème**: déclenche énormément d'événements (à chaque scroll...) 

# Avec intersectObserver
même html. 

```javascript
const targets = document.querySelectorAll('img');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        img.classList.add('fade');

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);
```

# avec l'attribut "loading"

```html
<img loading="eager" />
<img loading="lazy" />
```

# éviter le déplacement du contenu

```html
<img width=972 height=3920 loading="lazy" />
```

```css 
img 
{ max-width: 100%;
height: auto;
```
