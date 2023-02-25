// dans ce fichier, nous aurons 2 commandes : la commande snipe et l'évent messageDelete
// pour que le snipe fonctionne correctement, vous devez ajouter les variables suivantes dans votre index ou dans votre fichier variables :
/*
snipe_author:"",
snipe_msg:"",
snipe_date:"",
snipe_channel:"",
*/
module.exports=[{
    name:"snipe",
    code:`
    $sendMessage[{newEmbed:
      {author:message de $userTag[$getChannelVar[snipe_author]]:$userAvatar[$getChannelVar[snipe_author]]}
      {description:*le <t:$getChannelVar[snipe_date]:F>*}
      {field::$getChannelVar[snipe_msg]:yes}
      {color:2b2d31}
      {timestamp}
    }]
    
    $onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;true]]!=;{newEmbed:{description:Je n'ai rien trouvé à snipe dans <#$mentionedChannels[1;true]>...}{color:3b5f64}}]
    `
  },{
    type:'messageDelete',
    channel:'$channelID',
    code:`
    $setChannelVar[snipe_author;$authorID;$channelID]
    $setChannelVar[snipe_msg;$message;$channelID]
    $setChannelVar[snipe_date;$truncate[$divide[$dateStamp;1000]];$channelID]
    $setChannelVar[snipe_channel;$channelID;$channelID]
    `
  }]
