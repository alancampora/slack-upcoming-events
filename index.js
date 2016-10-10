// schsdule events 
var data = require('./lib/test/dummyData.json');
var Event = require('./lib/Event');
var Scheduler = require('./lib/Scheduler');
var Slack = require('./lib/Slack');


var oScheduler = new Scheduler();
var oSlack = new Slack();

// Schedule event to check if there is any anniversary between running date (today) and next week (7 days gap) 
var oEvent = new Event(7,new Date(),data);

oScheduler.scheduleEvent({
    runningDay:0,
    iternval: 1000,
    runningHour:20,
    successCallback:function(){
        var events = oEvent.upcomingEvents();
        
        oSlack.say(
            'THIS IS A MESSAGE', 
            function(){
                console.log('success'); 
            })       
    }
);


