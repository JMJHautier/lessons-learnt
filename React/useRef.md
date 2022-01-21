# créer plusieurs Refs

```javascript
function App() {

  const section  = useRef([])
  
  return (
        <section id="home" ref={(el) => section.current.push(el)}>
        <Welcome />
          </section>
        <section id="about" ref={(el) => section.current.push(el)}>
        <Welcome />
        </section>
        
        ) 
        
```
