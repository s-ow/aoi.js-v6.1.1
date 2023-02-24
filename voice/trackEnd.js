// exemple d'utilisation avec "trackEnd", le but sera d'envoyer un message à chaque fin de morceau avec les infos du prochain morceau
module.exports={
  name:"trackEnd", // optionnel
  type:"trackEnd", // obligatoire
  channel:"$voiceID[$clientID]", //optionnel
  code:`
  $if[$queue!=;J'ai fini de jouer \`$songInfo[title;0]\`, je joue maintenant \`$songInfo[title;1]\` - __$humanizeMS[$songInfo[duration;1]]__ dans <#$voiceID[$clientID]>.;La playlist est terminée.]
  `
}
  
