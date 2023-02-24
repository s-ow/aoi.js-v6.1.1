//<------Configuration des constantes------>
const aoijs = require('aoi.js');
const config = require('./config.js'); //création d'un fichier de configuration
const bot = new aoijs.AoiClient(config.Bot); //création de l'objet Bot
const {
    AoiVoice,
    PlayerEvents,
    PluginName,
    Cacher,
    Filter,
  } = require(`@akarui/aoi.music`); // ajout du aoi.music

require('./handler/status.js')(bot) //statut handler
require('./handler/variables.js')(bot) //variables handler

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")     // handler des commandes


//<------Options de musique------>
const voice = new AoiVoice(bot, {
    searchOptions: {
        soundcloudClientId: "ID SoundCloud à remplir !",
        youtubegl: "US",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});
voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
voice.addPlugin( PluginName.Filter, new Filter( {
    filterFromStart: false,
}));
voice.bindExecutor(bot.functionManager.interpreter);

voice.addEvent("trackStart");  //ajout des évents vocaux/musicaux
voice.addEvent("trackEnd");
voice.addEvent("queueEnd");
voice.addEvent("queueStart");
voice.addEvent("audioError");
voice.addEvent("trackPause");
voice.addEvent("trackResume");

loader.load(voice.cmds,"./voice/") //handler des commandes évents musique


//<------Commandes dans l'index------>

bot.readyCommand({ //commande de démarrage qui envoie un message dans la console, vous pouvez la custom pour qu'elle envoie aussi dans un salon discord
    channel: "",
    code: `$log[$userTag[$clientID] a redémarré avec succès :)] 
`
})
