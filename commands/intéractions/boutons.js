// dans ce fichier, nous allons créer une commande qui envoie un simple message suivi d'un bouton
module.exports=[{
  name:"bouton",
  code:`
  $addButton[1;Lien du wiki;primary;IDbouton;false;🔗]
  Ce message est suivi d'un bouton.
  `
},{
  name:"IDbouton",
  type:"interaction",
  prototype:"button",
  code:`
  $interactionReply[Le bouton fonctionne !;{newEmbed:{description:Voici le lien du [wiki sur les boutons](https://aoi.js.org/docs/functions/Calling/addButton/)}};;;everyone;true]
  `
}]
// grâce au "true" à la fin, le message est même en ephemeral
