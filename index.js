// schsdule events 
var data = require('./lib/test/dummyData.json');
var Event = require('./lib/Event');
var Scheduler = require('./lib/Scheduler');
var Slack = require('./lib/Slack');


var oEvent = new Event(7,new Date(),data);
var oScheduler = new Scheduler();
var oSlack = new Slack();

oScheduler.scheduleEvent(oEvent,0,1000,20,
    function(){
        var events = oEvent.upcomingEvents();
        oSlack.say(
            'THIS IS A MESSAGE', 
            function(){
                console.log('success'); 
            })       
    }
);


