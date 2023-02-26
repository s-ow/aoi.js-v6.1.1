module.exports={
    name:"volume",
    code:`
    J'ai changé le volume dans <#$voiceID[$clientID]>, il est maintenant à $message[1].

    $volume[$message[1]]

    $onlyIf[$isNumber[$message[1]]==true;Mauvais usage, essaie \`$getGuildVar[prefix]volume <volume>\`.]
    $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];Tu n'es pas dans mon salon vocal.]
    $onlyIf[$queue!=;Je ne joue pas de musique actuellement.]
    `
}