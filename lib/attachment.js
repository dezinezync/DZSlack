var assert = require('assert');

class Attachment {

	constructor(properties) {
		this.properties = properties;
	}

	toObject() {

		//  plain-text summary of the attachment. This text will be used in clients that don't show formatted text (eg. IRC, mobile notifications) and should not contain any markup.
		var fallback = this.properties.fallback;

		// An optional value that can either be one of good, warning, danger, or any hex color code (eg. #439FE0). This value is used to color the border along the left side of the message attachment.
		var color = this.properties.color || this.properties.colour;

		// This is optional text that appears above the message attachment block.
		var pretext = this.properties.pretext;

		// Small text used to display the author's name.
		var author_name = this.properties.authorName || this.properties.author_name;

		// A valid URL that will hyperlink the author_name text mentioned above. Will only work if author_name is present.
		var author_link = this.properties.authorLink || this.properties.author_link;

		// A valid URL that displays a small 16x16px image to the left of the author_name text. Will only work if author_name is present.
		var author_icon = this.properties.authorIcon || this.properties.author_icon;

		// The title is displayed as larger, bold text near the top of a message attachment. 
		var title = this.properties.title;

		// By passing a valid URL in the title_link parameter (optional), the title text will be hyperlinked.
		var title_link  = this.properties.titleLink || this.properties.title_link;

		// This is the main text in a message attachment, and can contain standard message markup. The content will automatically collapse if it contains 700+ characters or 5+ linebreaks, and will display a "Show more..." link to expand the content.
		var text = this.properties.text;

		// A valid URL to an image file that will be displayed inside a message attachment. We currently support the following formats: GIF, JPEG, PNG, and BMP. Large images will be resized to a maximum width of 400px or a maximum height of 500px, while still maintaining the original aspect ratio.
		var image_url = this.properties.imageURL || this.properties.image_url;

		// A valid URL to an image file that will be displayed as a thumbnail on the right side of a message attachment. We currently support the following formats: GIF, JPEG, PNG, and BMP. The thumbnail's longest dimension will be scaled down to 75px while maintaining the aspect ratio of the image. The filesize of the image must also be less than 500 KB.
		var thumb_url = this.properties.thumbURL || this.properties.thumb_url;

		/*
		 * Fields are defined as an array, and hashes contained within it will be displayed in a table inside the message attachment.
		 * title: Shown as a bold heading above the value text. It cannot contain markup and will be escaped for you.
		 * value: The text value of the field. It may contain standard message markup and must be escaped as normal. May be multi-line.
		 * short: An optional flag (boolean) indicating whether the value is short enough to be displayed side-by-side with other values.
		 */
		var fields = this.fields;

		// An array of all properties in which you've used markdown formatted text. Valid values for mrkdwn_in are: ["pretext", "text", "fields"]. Setting "fields" will enable markup formatting for the value of each field.
		var mrkdwn_in = this.properties.mrkdwn_in;

		return {
			fallback,
			color,
			pretext,
			author_name,
			author_link,
			author_icon,
			title,
			title_link,
			text,
			image_url,
			thumb_url,
			fields,
			mrkdwn_in
		};

	}

	addField(field) {

		assert(field, "A valid field was not provided");
		assert(field.constructor === Object, "A valid object was not provided for the field parameter. Expecting a dictionary.");

		if(!this.fields) {
			this.fields = [];
		}

		this.fields.push(field);

	}

}

module.exports = Attachment;