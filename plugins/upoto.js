var upoto = {
    name: 'upoto',
    status: true,
    clue: ['Fungsi: upload file', 'Format: .upoto ./img.jpg'],
    run: async function (airgram, msg,tg) {
        var chat_id = msg.chat.id;
        var user_id = msg.from.id;
        var chat_type = msg.chat.type;
        var text = msg.text;
        var msg_id = msg.message_id;
        var msgr = msg.reply_to_message ? msg.reply_to_message : false;
        var outgoing = msg.outgoing ? true : false;
        if (RegExp("^[\/\.\!]upoto ", "i").exec(text)) {
            return tg.sendPhoto(chat_id, text.replace(/(^[\/\.\!]upoto )/ig, "")).catch(function(e){
                return tg.sendMessage(chat_id, `Error ${e.message}`)
            })
        }
    }
}
module.exports = {
    upoto
}
