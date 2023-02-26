module.exports={
    name:"shuffle",
    code:`
    J'ai mélangé la playlist de <#$voiceID[$clientID]>.

    $shuffleQueue

    $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];Tu n'es pas dans mon salon vocal.]
    $onlyIf[$queue!=;Je ne joue pas de musique actuellement.]
    `
}