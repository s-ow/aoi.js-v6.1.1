// n'oubliez pas de changer l'ID à la ligne 21, sinon je serai dev de tous vos bots !
module.exports={
    name:"botinfo",
    code:`
    $sendMessage[{newEmbed:
        {author:$userTag:$userAvatar}
        {title:Informations de $username[$clientID]}
        {description:**🤖 Informations globales du bot**
\`\`\`mma
Nom       ➜ $userTag[$clientID]
ID        ➜ $clientID
Serveurs  ➜ $guildCount
Membres   ➜ $allMembersCount
Commandes ➜ $commandsCount
Ping      ➜ $pingms
Uptime    ➜ $uptime
Prefixe   ➜ $getGuildVar[prefix]
\`\`\`
**🖥️ Contributeurs**
\`\`\`mma
Developpeur ➜ $userTag[931326112598986912]
\`\`\`
**⚙️ Informations avancées du bot**
\`\`\`mma
Package   ➜ aoi.js $packageVersion
Node      ➜ $nodeVersion
CPU Usage ➜ $cpu%
RAM Usage ➜ $ram MB / $maxRam MB
DB ping   ➜ $databasePingms
\`\`\`
}
        {timestamp}
        {color:3b5f64}
}]
    `
}
