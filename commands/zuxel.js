require("../ExtendedMessage.js");
exports.execute = async(client,message,args) => {

   
	message.channel.startTyping()
	
   message.inlineReply('Hi');
	message.channel.stopTyping()

}
exports.help = {
  name: 'zuxel',
  aliases:[],
  usage:'idk'
}