module.exports= {
    Bot: {
        token: "token de votre bot", //à remplir !
        prefix: "$getGuildVar[prefix]", 
        //si pas de variable, mettez simplement le préfixe entre "", vous pouvez aussi mettre <@!$clientID> pour que le ping de votre bot soit un prefixe
        //vous pouvez également mettre plusieurs préfixes en utilisant prefix: ["prefixe 1","prefixe 2"],
        
        intents: ["Guilds", "GuildMembers", "GuildModeration", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessages", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping", "MessageContent", "GuildScheduledEvents", "AutoModerationConfiguration", "AutoModerationExecution"],
        events: ["onMessage", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onGuildJoin", "onGuildLeave", "onGuildUpdate", "onGuildUnavailable", "onRoleCreate", "onRoleUpdate", "onRoleDelete", "onChannelCreate", "onChannelUpdate", "onChannelDelete", "onChannelPinsUpdate", "onStageInstanceCreate", "onStageInstanceUpdate", "onStageInstanceDelete", "onThreadCreate", "onThreadUpdate", "onThreadDelete", "onThreadListSync", "onThreadMemberUpdate", "onThreadMembersUpdate", "onJoin", "onLeave", "onMemberUpdate", "onMemberAvailable", "onMembersChunk", "onEmojiCreate", "onEmojiDelete", "onEmojiUpdate", "onStickerCreate", "onStickerDelete", "onStickerUpdate", "onBanAdd", "onBanRemove", "onReactionAdd", "onReactionRemove", "onReactionRemoveAll", "onReactionRemoveEmoji", "onVoiceStateUpdate", "onPresenceUpdate", "onTypingStart", "onInteractionCreate", "onApplicationCmdPermsUpdate", "onUserUpdate", "onVariableCreate", "onVariableDelete", "onVariableUpdate", "onFunctionError", "onWebhookUpdate"],
         // vous n'aurez pas forcément besoin de tous les intents et de tous les évents mais mettez les, ça évite les crashs
        database: {
            type:'default',
            db:require('dbdjs.db'),
            path:"./db/",
            tables:["main"],
            promisify:false
        },
        respondOnEdit:{
            commands: true
        },
        suppressAllErrors: false,    // pour faire semblant qu'il n'y a pas d'erreur mettez true mais c'est déconseillé
        desktopPlatform: true        // vous pouvez mettre mobilePlatform: true pour que votre bot soit "sur téléphone"
    }
}
