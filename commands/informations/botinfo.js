// n'oubliez pas de changer l'ID Γ  la ligne 21, sinon je serai dev de tous vos bots !
module.exports={
    name:"botinfo",
    code:`
    $sendMessage[{newEmbed:
        {author:$userTag:$userAvatar}
        {title:Informations de $username[$clientID]}
        {description:**π€ Informations globales du bot**
\`\`\`mma
Nom       β $userTag[$clientID]
ID        β $clientID
Serveurs  β $guildCount
Membres   β $allMembersCount
Commandes β $commandsCount
Ping      β $pingms
Uptime    β $uptime
Prefixe   β $getGuildVar[prefix]
\`\`\`
**π₯οΈ Contributeurs**
\`\`\`mma
Developpeur β $userTag[931326112598986912]
\`\`\`
**βοΈ Informations avancΓ©es du bot**
\`\`\`mma
Package   β aoi.js $packageVersion
Node      β $nodeVersion
CPU Usage β $cpu%
RAM Usage β $ram MB / $maxRam MB
DB ping   β $databasePingms
\`\`\`
}
        {timestamp}
        {color:3b5f64}
}]
    `
}
