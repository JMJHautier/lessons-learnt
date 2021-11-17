# pourquoi utiliser framer

- permet de facilement déclencher des animations au montage!! alternative à ce propos: https://letsbuildui.dev/articles/how-to-animate-mounting-content-in-react
  ![grafik](https://user-images.githubusercontent.com/13255701/139465205-e7ae598a-c083-4763-8d77-e940bbcccf15.png)

# déclenchement de l'animation

> When a component mounts, it'll automatically animate to the values in animate if they're different from those defined in style or initial. You can set the initial prop to false to use the value in animate as the component's mounted state to disable mount animations.
> https://www.framer.com/docs/animation/

# AnimatePresence

"Animate components when they're removed from the React tree."

- wrapper les composants concernés
- mettre pour chaque composant une props key unique
  "The direct child(ren) of AnimatePresence need to be either changing key or mounting/unmounting to fire exit animations. Here, the direct child is Container, which never does either. So this isn't going to work."
  https://github.com/framer/motion/issues/493

  ## exemple:

  ````javascript
              <AnimatePresence>
            {showHotkeys
              ? <motion.span
              key={1}
              initial={{ opacity: 0, x: -10, y: -5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 3 }, position: 'absolute' }}
              className="keyUp">&#11167;
              </motion.span>
              : <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ delay: 3 }}
              >
                <FontAwesomeIcon
                key={2}
                icon={faTimesCircle}
                />
              </motion.span>
              }
              </AnimatePresence>
              ```
  ````
