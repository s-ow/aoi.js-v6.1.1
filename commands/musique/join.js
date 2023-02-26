module.exports={
    name:"connect",
    code:`
J'ai rejoint <#$voiceID[$clientID]>.
Utilisateurs dans ce salon : $usersInChannel[$voiceID[$clientID];user;, ].

    $disableMentionType[users]

    $joinVC[$voiceID[$authorID]]

    $onlyIf[$voiceID[$authorID]!=;Tu n'es pas dans un salon vocal.]
    $onlyIf[$voiceID[$clientID]==;Je suis déjà en vocal !]
    `
}