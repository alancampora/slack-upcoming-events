var sinon = require('sinon');
var Scheduler = require('../Scheduler');
var Event = require('../Event');

var oScheduler = new Scheduler();

describe('scheduleEvent',function(){

    before(function() {
    });

    after(function() {
        this.clock.restore();
    });
    
    it('should run on friday(5) 10 am', function(){
        //setup
        var oEvent = new Event(); 
        var date = new Date(2016,9,7,9,0,0);
        this.clock = sinon.useFakeTimers(date.getTime());
        var successCallback = sinon.spy();
        var interval = 60*60*1000;

        //execute
        oScheduler.scheduleEvent({
            runningDay:5, 
            interval:interval, 
            successCallback:successCallback,
            runningHour: 10 
        });
        this.clock.tick(interval);
       
        //assert
        sinon.assert.calledOnce(successCallback);

        //clean

    });

    it('should not run' , function(){
    
        // setup 
        var oEvent = new Event();
        var date = new Date(2016,9,6,9,0,0);
        this.clock = sinon.useFakeTimers(date.getTime());
    
    });
});
