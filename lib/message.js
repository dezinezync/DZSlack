var assert = require('assert');
var Attachment = require('./attachment');

class Message {

	constructor(properties) {
		this.properties = properties;
	}

	toObject() {

		// This is the text that will be posted to the channel.
		var text       = this.properties.text;

		// You can override an incoming webhook's configured name with the username parameter
		var username   = this.properties.username;

		// You can also override the bot icon either with icon_url or icon_emoji".
		var icon_url   = this.properties.icon_url;

		// example would be ":ghost:"
		var icon_emoji = this.properties.icon_emoji;

		// Channel override: A public channel can be specified with "channel": "#other-channel", and a Direct Message with "channel": "@username".
		var channel = this.properties.channel;

		// Advanced attachments using the Attachment Object class can be added to standard messages. See the attachment class for documentation of properties. Use the addAttachment method on a message to append the attachments.
		var attachments = this.properties.attachments;

		// Slack can automatically unfurl (grab metadata and show richly formatted information) links. Defaults to true.
		var unfurl_links = (this.properties.unfurlLinks || this.properties.unfurl_links) || true;

		return {
			text, 
			username, 
			icon_url, 
			icon_emoji,
			channel,
			attachments
		};

	}

	addAttachment(attachment) {

		assert(attachment, "an attachment wasn't provided.");
		assert(attachment.constructor === Attachment, "the attachment provided was of a wrong class type. Expected [Class] Attachment");

		if(!this.properties.attachments) {
			this.properties.attachments = [];
		}

		this.properties.attachments.push(attachment);

	}

}

module.exports = Message;