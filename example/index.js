
var dzSlack = require(__dirname+'/../index');
var slack = new (dzSlack.slack)("your incoming webhook URL goes here");
var Message = dzSlack.message;
var Attachment = dzSlack.attachment;

var msg = new Message({
	"text" : "This is a test message",
	"username" : "DZSlack Class",
	"icon_emoji": ":ghost:"
})

var attachment1 = new Attachment({
	"fallback": "this is a fallback text. Always have a plan B.",
	"color": "#1CADF8",
	"pretext": "hmm, an opening would be nice.",
	"title": "Attachment 1",
	"text": "This is _an attachment_ text. This should show below the title, as you must have expected. You're a smart person!",
	"mrkdwn_in": "text"
});

attachment1.addField({
	"title": "Field A",
	"value": "sample data foo",
	"short": true
});

attachment1.addField({
	"title": "Field B",
	"value": "sample data bar",
	"short": true
});

attachment1.addField({
	"title": "Field C",
	"value": "sample data which is long such that it cannot be rendered in a multi-column format",
	"short": false
});

msg.addAttachment(attachment1);

console.log("WARNING: Running example. Please comment out this line, and add your incoming webhook URL and try again.");

// uncomment the lines below to send the message.
// slack.post(msg, function(err, response) {
// 	console.log(err||response);
// })