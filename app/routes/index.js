'use strict';

module.exports = function(app){
    
    app.route('/')
        .get(function(req,res){
            res.sendFile(process.cwd() + '/public/index.html');
        });
    
    app.route('/:date')
        .get(function(req,res){
            var months = ['January','February','March','April',
                            'May','June','July','August',
                                'September','October','November','December'];
            var date = req.params.date;
            var unixTime;
            var naturalDate;
            
            if (isNaN(date)) {
                unixTime = new Date(date).getTime()/1000;
                if(isNaN(unixTime)){
                    unixTime=null;
                    naturalDate=null;
                }else{
                    naturalDate = new Date(unixTime * 1000);
                }
                
            }else{
                unixTime=Number(date);
                naturalDate = new Date(unixTime * 1000);
            }
            
            var returnNaturalDate = naturalDate===null?null:months[naturalDate.getMonth()] + ' ' + naturalDate.getDate() + ', ' + naturalDate.getFullYear();
            
            var returnValue = {
                "unix":unixTime,
                "natural": returnNaturalDate
            };
                
            
            res.json(returnValue);
        });
};