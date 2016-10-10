// schsdule events 
var data = require('./lib/test/dummyData.json');
var Event = require('./lib/Event');
var Scheduler = require('./lib/Scheduler');
var Slack = require('./lib/Slack');


var oScheduler = new Scheduler();
var oSlack = new Slack();

// Schedule event to check if there is any anniversary between running date (today) and next week (7 days gap) 
var oEvent = new Event(7,'09/07/2016',data);

oScheduler.scheduleEvent({
    runningDay:0, 
    iternval: 1000, 
    runningHour:21,
    successCallback:function(){
        var events = oEvent.upcomingEvents();

        var text = oFomatter.formatEvents(events);
        
        oSlack.say(
            'THIS IS A MESSAGE', 
            function(){
                console.log('success'); 
            })       
    }
});


