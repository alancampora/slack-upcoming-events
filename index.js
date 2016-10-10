// schsdule events 
var data = require('./lib/test/dummyData.json');
var Event = require('./lib/Event');
var Scheduler = require('./lib/Scheduler');
var Slack = require('./lib/Slack');
var Formatter = require('./lib/Formatter');

var oScheduler = new Scheduler();
var oSlack = new Slack();
var oFormatter = new Formatter();
// Schedule event to check if there is any anniversary between running date (today) and next week (7 days gap) 
var oEvent = new Event(7,'09/07/2016',data);

oScheduler.scheduleEvent({
    runningDay:0, 
    interval: 60*1000, 
    runningHour:22,
    successCallback:function(){
        var events = oEvent.upcomingEvents();

        var text = oFormatter.eventsToStr(events);
        
        oSlack.say(
            text, 
            function(){
                console.log('success'); 
            })       
    }
});


