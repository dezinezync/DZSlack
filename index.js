// require('babel/register')();
var slack = require(__dirname+'/lib/slack');
var message = require(__dirname+'/lib/message');
var attachment = require(__dirname+'/lib/attachment');

module.exports = {
	"slack" : slack,
	"message" : message,
	"attachment" : attachment
};