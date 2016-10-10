function Scheduler(){
    
}

/*
 *data 
 *    runningHour - scheduler will run at runningHour time
 *    runningDay - schduler will only run on runninDay
 *    interval - checking every x interval 
 *    successCallback
 *
 */
Scheduler.prototype.scheduleEvent = function(data){ 
    //should check every interval time  if current day is runningDay and whether now is runnninghour 
    setInterval(function(){
       var date = new Date();

       console.log(data);
       
       if(date.getDay() === data.runningDay && date.getHours() === data.runningHour){
            data.successCallback.call(this); 
       }
    
    },data.interval);
}

module.exports = Scheduler;
