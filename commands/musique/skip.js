module.exports={
    name:"skip",
    code:`
    J'ai passé \`$get[nom]\`.

    $skipTrack

    $let[nom;$songInfo]

    $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];Tu n'es pas dans mon salon vocal.]
    $onlyIf[$voiceID[$clientID]!=;Je ne suis pas en vocal]
    `
}