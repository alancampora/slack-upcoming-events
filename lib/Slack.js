var config = require('../config.json');
var SlackNode = require('slack-node');


function Slack (){
    this.slacknode = new SlackNode();
    this.slacknode.setWebhook(config.webhook);
}

Slack.prototype.say = function(message,successCallback){

   this.slacknode.webhook({
        text: message,
        channel: config.channel,
   },function(){
        successCallback.call();     
    });
}

module.exports = Slack;
