// dans ce fichier, nous allons faire une simple commande play qui fera jouer une musique au bot
// pensez à faire une commande pour que le bot rejoigne votre salon avant de jouer
module.exports=[{
  name:"play",
  code:`
  Je joue maintenant \`$songInfo[title;$get[a]]\` | $songInfo[duration;$get[a]] dans <#$voiceID[$clientID]>.
  
  $let[a;$sub[$queueLength;1]]
  
  $playTrack[$message;youtube]
  
  $onlyIf[$message!=;Mauvais usage, pense à demander une musique dans ta commande.]
  $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];Tu n'es pas dans mon salon.]
  $onlyIf[$voiceID[$clientID]!=;Je ne suis pas en vocal.]
  `
}]
