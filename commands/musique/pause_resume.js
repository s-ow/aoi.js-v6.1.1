module.exports =[{
    name:"pause",
    code:`
    J'ai mis en pause \`$songInfo\`. ($getGuildVar[prefix]resume pour remettre en route)
    $pauseTrack
    $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];Tu n'es pas dans mon salon.]
    $onlyIf[$queue!=;Je ne joue pas de musique actuellement.]
    `
},{
    name:"resume",
    code:`
    J'ai remis en route \`$songInfo\`.
    $resumeTrack
    $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];Tu n'es pas dans mon salon.]
    $onlyIf[$queue!=;Je ne joue pas de musique actuellement.]
    `
}]