#### Comment utiliser le handler "commands" ?
- cet handler sert pour toutes les commandes des types suivants :
   - les commandes manuelles (basiques ou vocales)
   - les évents liés aux salons textuels ou aux utilisateurs

#### Exemple de fichier :
Pour une commande simple :
```js
module.exports=[{
  name:"nom de la commande", // obligatoire, c'est ce qu'il faudra mettre après le préfixe pour exécuter la commande
  aliases:['nom raccourci','autre nom'], // optionnel, ce sont des noms supplémentaires, vous pouvez en choisir le nombre
  code:`
  code de la commande
  `
}]
```
Pour une commande effectuée par un évent :
```js
module.exports=[{
  type:"messageDelete", // évent utilisé, messageDelete est un exemple
  channel:"$channelID", // salon où s'effectue le code
  code:`
  code de la commande
  `
}]
```


