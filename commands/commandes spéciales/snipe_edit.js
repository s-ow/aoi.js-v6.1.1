// dans ce fichier, nous aurons 2 commandes : la commande snipe-edit et l'évent messageUpdate
// pour que le snipe-edit fonctionne correctement, vous devez ajouter les variables suivantes dans votre index ou dans votre fichier variables :
/*
snipe_edit_author:"",
snipe_edit_msg:"",
snipe_edit_old_msg:"",
snipe_edit_date:"",
snipe_edit_channel:"",
*/
module.exports=[{
    name:"snipe-edit",
    code:`
    $sendMessage[{newEmbed:
      {author:message de $userTag[$getChannelVar[snipe_edit_author]]:$userAvatar[$getChannelVar[snipe_edit_author]]}
      {description:*le <t:$getChannelVar[snipe_edit_date]:F>*}
      {field:Ancien message:$getChannelVar[snipe_edit_old_msg]:yes}
      {field:Nouveau message:$getChannelVar[snipe_edit_msg]:yes}
      {color:2b2d31}
      {timestamp}
    }]
    
    $onlyIf[$getChannelVar[snipe_edit_msg;$mentionedChannels[1;true]]!=;{newEmbed:{description:Je n'ai rien trouvé à snipe-edit dans <#$mentionedChannels[1;true]>...}{color:3b5f64}}]
    `
  },{
    type:'messageUpdate',
    channel:'$channelID',
    code:`
    $setChannelVar[snipe_edit_author;$authorID;$channelID]
    $setChannelVar[snipe_edit_msg;$message;$channelID]
    $setChannelVar[snipe_edit_old_msg;$oldMessage;$channelID]
    $setChannelVar[snipe_edit_date;$truncate[$divide[$dateStamp;1000]];$channelID]
    $setChannelVar[snipe_edit_channel;$channelID;$channelID]
    `
  }]
