module.exports={
    name:"stop",
    code:`
J'ai quitté <#$get[id]>.
Utilisateurs dans ce salon : $usersInChannel[$get[id];user;, ]

    $disableMentionType[users]

    $wait[1s]

    $leaveVC

    $let[id;$voiceID[$clientID]]

    $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];Tu n'es pas dans mon salon vocal.]
    $onlyIf[$voiceID[$clientID]!=;Je ne suis pas en vocal]
    `
}
