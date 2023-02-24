module.exports = (bot) => {  //wiki aoi.js : https://aoi.js.org/docs/guides/status
  
    bot.status({
        text: "s-ow qui travaille",
        type: "WATCHING",  
      });
  
  // les différents types sont : PLAYING, WATCHING, LISTENING, COMPETING et STREAMING, ce dernier nécessite l'option url
  
      bot.status({
        text: "s-ow qui travaille",
        type: "STREAMNING",  
        url: "twitch.tw/rebeudeter",
      });
  
  // vous pouvez également utiliser l'option time: pour que le statut soit temporaire si vous en avez plusieurs
  
      bot.status({
        text: "s-ow qui travaille",
        type: "LISTENING",  
        time: "12",
      });
  
  // ou encore l'option status: pour donner à votre bot une icône de statut
  // les différents types sont : online, idle, dnd, invisible
  // vous pouvez également mettre le bot sur téléphone grâce au config.js, je vous laisse aller voir
  
      bot.status({
        text: "s-ow qui travaille",
        type: "PLAYING",  
        status: "dnd",
      });
  
    }
