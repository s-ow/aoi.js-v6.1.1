module.exports={
    name:"queue",
    code:`
    $sendMessage[{newEmbed:
        {author:Playlist:$userAvatar[$authorID]}
        {description:Taille de la playlist : \`$queueLength\` morceaux.

$replaceText[$queue[1;90;[\`{title}\`]({url})
Ajouté par : {requester}\n
];,;]
}{color:3b5f64}
    }]

    $onlyIf[$queue!=;Je ne joue pas de musique actuellement.]
    `
}