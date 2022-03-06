# caractères spéciaux

on peut éviter d'utiliser des icones en utilisant les caractères spéciaux de HTML, par exemple:
&#129043;
https://www.compart.com/en/unicode/U+2B9F

# les boutons

Attention, il vaut mieux préciser à chaque fois le type des boutons, même si c'est "type:button"

Si on ne le fait pas, presser entrer va executer le premier bouton trouvé, même si c'est pas celui qui soumet le formulaire par ex. 
https://stackoverflow.com/questions/497094/how-do-i-find-out-which-dom-element-has-the-focus


# no image in select option :( 

`You can’t place icons or images in a standard html select element

Usually you would use a select replacement plugin where a standard select is converted into an html list and icons can be added to a normal list. The js then takes care of displaying selected list items and at the same time updating the original select

Alternatively you could use a standard html list but then use js to allow selection and pasting values into a hidden input.`

https://www.sitepoint.com/community/t/how-to-insert-an-icon-inside-of-a-select-list/356568/2

also consider react-select 
