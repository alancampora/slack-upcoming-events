

function Event(daysGap, startingDate, data){
    
    this.startingDate = new Date(startingDate);
    this.daysGap = daysGap || 7 ; 
    this.eventsData = data;
}

Event.prototype.getAnniversaries = function(){
    var anniversaries = this.eventsData.anniversaries; 
    var result = [];
    for(var key in anniversaries){
            var data = anniversaries[key];
               var date = new Date(this.convertStrToDateStr(key));
               result.push({
                   date : date,   
                   text: data.text 
               })
            }

    return result;
}
Event.prototype.upcomingEvents = function(){
   var anniversaries = this.getAnniversaries(); 
       anniversaries.filter(event  => this.isUpcomingEvent(event.date));

       console.log(anniversaries);
    return anniversaries;
}

Event.prototype.convertStrToDateStr = function(str){
    var newStr = str.split('/');
    return newStr[1] + '/' + newStr[0] + '/' + newStr[2];
}

Event.prototype.newDateWithGap = function(begin){
    var newDate = new Date(begin.getTime() + this.daysGap * 86400000 );
    newDate.setHours(0,0,0,0);
    return newDate;
}

Event.prototype.isUpcomingEvent = function(eventDate){
    var start = this.startingDate;
    var end = this.newDateWithGap(this.startingDate);

    return this.isDateBigger(eventDate,start) && !this.isDateBigger(eventDate,end);
}        

Event.prototype.isDateBigger = function(date1, date2){
    var isBiggerInSameMonth = date1.getUTCDate() >= date2.getUTCDate() && date1.getUTCMonth() >= date2.getUTCMonth(); 
    var isBiggerInDifferentMonth = date1.getUTCDate() <= date2.getUTCDate()  && date1.getUTCMonth() > date2.getUTCMonth() 
    
    return isBiggerInSameMonth || isBiggerInDifferentMonth;
}

module.exports = Event;
