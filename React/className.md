# fonctions

on peut mettre une fonction à l'intérieur de className, par ex: 
```javascript
  const getStyle = (elementId) => {
    
    const itemStyle = classNames({
      "nav__item--active": isVisible[elementId] && ratio[elementId] >0.3
    })

    return itemStyle
  }

  
return <><a href="#home" name="home" className={getStyle("home")} ref={(el)=> menuItems?.current?.push(el)}>{home[language]}</a>

```
