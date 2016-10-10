function Formatter(){
}

Formatter.prototype.eventsToStr= function(events){

    return events.reduce( (result, event) => {
        return result +=  event.type + '-' + event.text + '\n'
    }, '');

}

module.exports = Formatter;
