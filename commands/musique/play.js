module.exports=[{
    name:"play",
    code:`
    $if[$get[a]==0;Je joue maintenant \`$songInfo[title;$get[a]]\` | $humanizeMS[$songInfo[duration;$get[a]]] dans <#$voiceID[$clientID]>.;J'ai ajouté \`$songInfo[title;$get[a]]\` | $humanizeMS[$songInfo[duration;$get[a]]] à la playlist de <#$voiceID[$clientID]>.]
    
    $let[a;$sub[$queueLength;1]]
    
    $playTrack[$message;soundcloud]
    
    $onlyIf[$message!=;Mauvais usage, pense à demander une musique dans ta commande.]
    $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];Tu n'es pas dans mon salon.]
    $onlyIf[$voiceID[$clientID]!=;Je ne suis pas en vocal.]
    `
  }]
