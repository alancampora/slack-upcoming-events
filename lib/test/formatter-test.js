var Formatter = require('../Formatter');
var should = require('should');

var oFormatter = new Formatter();

describe('events to str', function(){

    it('should return an string', function(){
        // prepare 
        var events = [
            {
                date: new Date(),
                text: 'Birthday of XXXXXXXX', 
                type: 'birthady'
            },
            {
                date: new Date(), 
                text: 'Company anniversary of XXXXX',
                type: 'Company' 
            }
        ]

        //execute
        var result = oFormatter.eventsToStr(events);


        //assert
        should(result).be.a.String();
        

    });

});
