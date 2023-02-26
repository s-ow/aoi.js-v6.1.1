module.exports={
    name:"playing",
    code:`
    $sendMessage[{newEmbed:
        {author:$usertag:$userAvatar}
        {description:Morceau joué actuellement :
[\`$songInfo[title]\`]($songInfo[url])

Publié par : [$songInfo[artist]]($songInfo[artistURL])
Durée : \`$humanizeMS[$songInfo[duration]]\`
Demandé par : $songInfo[requester]
}
        {image:$songInfo[thumbnail]}
        {color:3b5f64}
    }]

    $onlyIf[$queue!=;Je ne joue pas de musique actuellement.]
    `
}