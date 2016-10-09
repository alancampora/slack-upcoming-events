function Scheduler(){
    
}

Scheduler.prototype.scheduleEvent = function(oEvent,runningDay,interval,runningHour, successCallback){
    //should every interval time  if current day is runningDay and now is runnning hour 
    setInterval(function(){
       console.log('trying to send message');
       var date = new Date(); 
       if(date.getDay() === runningDay && date.getHours() === runningHour){
            successCallback.call(this); 
       }
    },interval);
}

module.exports = Scheduler;
