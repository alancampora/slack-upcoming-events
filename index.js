// schsdule events 
var data = require('./lib/event/test/dummyData.json');
var oEvent = new Event(7,new Date(), data);
var oScheduler = new Scheduler();


oEvent.formatData();
oScheduler.scheduleEvent(oEvent,0,1000,
    function(){
        var events = oEvent.upcomingEvents();

        bot.sendWebhook({
          text: 'Upcoming events \n Birthdays:' + JSON.stringify(events.birthdays),
          channel: '#sovanta-ar-prospero',
        },function(err,res) {
          if (err) {
            console.log('-------------> error',err); 
          }
          console.log('response', res);
        });
    }
);


