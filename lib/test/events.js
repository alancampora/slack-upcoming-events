
var should = require('should');
var Event = require('../Event');
var eventsData  = require('./dummyData.json');

var oEvent =  new Event(7,'10/08/2016',eventsData);

describe('new date with gaps', function(){
    
   
    it('date should be 7 days in future',function(){
        
        var originalDate = new Date('10/10/2016');
        
        var newDate = oEvent.newDateWithGap(originalDate);
        
        should(newDate.getUTCDate()).be.exactly(17);
        should(newDate.getUTCMonth() + 1 ).be.exactly(10);
        should(newDate.getUTCFullYear()).be.exactly(2016);
    
    });

    it('date should be in next year', function(){
        var begin = new Date('12/30/2016');
        var expectedYear = 2017; 
        
        var newDate = oEvent.newDateWithGap(begin);
        
        should(newDate.getUTCFullYear()).be.exactly(expectedYear);
    
    });

});

describe.skip('formatted data', function(){

    it('Alan should be inside',function(){
   
        oEvent.formatData();
       
        var oAlanData = oEvent.formattedData.filter(p => p.name === 'Alan'); 
        
        should(oAlanData[0].name).be.exactly('Alan');
        should(oAlanData[0].birthday.getUTCDate()).be.exactly(20);

    }); 

});

describe('split data',function(){

    it('should change dd/mm/yyyy for mm/dd/yyy', function(){
        var expected = '12/25/2016';
        
        var strDate = oEvent.convertStrToDateStr('25/12/2016');
        
        should(strDate).be.exactly(expected);
    });


});

describe('is upcoming event', function(){
    
    it('is next week', function(){
    
        var upcomingEventDate  = new Date('10/12/2016');
        
        var result = oEvent.isUpcomingEvent(upcomingEventDate);

        should(result).be.exactly(true);
    })

});

describe('isDateBigger' , function(){
    it('should date 1 be bigger in  same month ', function(){
        var date1 = new Date('10/18/2016');
        var date2 = new Date('10/08/2016');

        var result = oEvent.isDateBigger(date1,date2);
        
        should(result).be.exactly(true);
    });

    it('should date1 be bigger in  different moth' , function(){
    
        var date1 = new Date('11/01/2016');
        var date2 = new Date('10/01/2016');

        var result = oEvent.isDateBigger(date1,date2);

        should(result).be.exactly(true);
    
    })
});

describe('upcoming events',function(){

    it('should get one anniversary',function(){
        
        var result = oEvent.upcomingEvents(); 
        
        should(result.length).be.exactly(1);
    });

});

describe('getAnniversaries', function(){

    it('should get one anniversary object with date and text defined', function(){
    
        var result =  oEvent.getAnniversaries();
 
        should.exist(result[0].date);
        should.exist(result[0].text);
    })

})




