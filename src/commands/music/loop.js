exports.execute = async (client, message, args, data) => {
	if (!message.member.voice.channel) {
		return message.channel.send(
			`${client.emotes.error} - You're not in a voice channel !`,
		);
	}

	if (
		message.guild.me.voice.channel &&
    message.member.voice.channel.id !== message.guild.me.voice.channel.id
	) {
		return message.channel.send(
			`${client.emotes.error} - You are not in the same voice channel !`,
		);
	}
	const queue = client.player.getQueue(message.guild.id)
	if (!queue) {
		return message.channel.send(
			`${client.emotes.error} - No music currently playing !`,
		);
	}

	if (args.join(" ").toLowerCase() === "queue") {
		if (client.player.getQueue(message.guild.id).loopMode) {
			client.player.setLoopMode(message, false);
			return message.channel.send(
				`${client.emotes.success} - Repeat mode **disabled** !`,
			);
		}
		else {
			client.player.setLoopMode(message, true);
			return message.channel.send(
				`${client.emotes.success} - Repeat mode **enabled** the whole queue will be repeated endlessly !`,
			);
		}
	}
	else if (client.player.getQueue(message.guild.id).repeatMode) {
		client.player.setRepeatMode(message, false);
		return message.channel.send(
			`${client.emotes.success} - Repeat mode **disabled** !`,
		);
	}
	else {
		client.player.setRepeatMode(message, true);
		return message.channel.send(
			`${client.emotes.success} - Repeat mode **enabled** the current music will be repeated endlessly !`,
		);
	}
};
module.exports.help = {
	name: "loop",
	aliases: ["lp", "repeat"],
	category: "Music",
	usage: "loop",
};
