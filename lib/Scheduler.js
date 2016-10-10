function Scheduler(){
    
}

/*
 *data 
 *    runningHour - scheduler will run at runningHour time
 *    runningDay - schduler will only run on runninDay - sunday is 0 , saturday is 6
 *    interval - checking every x interval , in milliseconds
 *    successCallback
 *
 */
Scheduler.prototype.scheduleEvent = function(data){ 
    //should check every interval time  if current day is runningDay and whether now is runnninghour 
    setInterval(function(){
       var date = new Date();

       console.log('trying to send message');
       
       if(date.getDay() === data.runningDay && date.getHours() === data.runningHour){
           console.log('sending message'); 
           data.successCallback.call(this); 
       }
    
    },data.interval);
}

module.exports = Scheduler;
