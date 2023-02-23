const aoijs = require('aoi.js'); //aoi.js is required to code in aoi.js
const config = require('./config.js'); //file where we will put the configuration infos
const bot = new aoijs.AoiClient(config.Bot); //creation of the object Bot
const {
    AoiVoice,
    PlayerEvents,
    PluginName,
    Cacher,
    Filter,
  } = require(`@akarui/aoi.music`);

require('./handler/status.js')(bot) //status handler
require('./handler/variables.js')(bot) //variables handler

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

bot.readyCommand({
    channel: "",
    code: `$log[$userTag[$clientID] a redémarré avec succès :)]
`
})

const voice = new AoiVoice(bot, {
    searchOptions: {
        soundcloudClientId: "VTl9gNS05wF10zfiwKJ6FwK9mJsLVuAV",
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

voice.addEvent("trackStart");
voice.addEvent("trackEnd");
voice.addEvent("queueEnd");
voice.addEvent("queueStart");
voice.addEvent("audioError");
voice.addEvent("trackPause");
voice.addEvent("trackResume");

loader.load(voice.cmds,"./voice/")