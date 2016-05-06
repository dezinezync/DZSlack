let assert      = require('assert');
let URL         = require('url');
let request     = require('request');
let Message     = require(__dirname+'/message');

class Slack {

    constructor(webhook) {
        this.properties = {webhook};
    }

    post(message, callback) {

        assert(message, "A message was not provided.");
        
        assert(message.constructor === Message, "The message provided was of a wrong class type. Expected [Class] Message");

        return Slack
        .query(message.toObject(), this.properties.webhook, callback);

    }

    static query(payload, hook, callback) {

        assert("payload", "a payload wasn't supplied");
        assert("hook", "a valid webhook URL wasn't supplied");

        let p;

        const fn = (resolve) => {
            request
            .post({
                uri: hook,
                form: JSON.stringify(payload)
            })
            .on('response', (response) => {

                response.on('data', (data)=> {
                    let resp = data.toString('utf8')
                    if(callback) 
                        callback(null, resp);
                    else 
                        resolve(resp)
                })

            })
            .on('error', (err) => {
                // console.error(err);
                if(callback) 
                    callback(err);
                else {
                    throw err;
                }

            })
        }

        if(!callback) {
            p = new Promise(fn);
        }
        else
            fn()

        return p;

    }

}

module.exports = Slack