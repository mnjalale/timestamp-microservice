'use strict';
(function(){
    var naturalDateLink = document.querySelector('#naturalDateLink');
    var unixDateLink = document.querySelector('#unixDateLink');
    
    naturalDateLink.innerHTML = appUrl + '/March%2015,%202015';
    naturalDateLink.href= appUrl + '/March%2015,%202015';
    
    unixDateLink.innerHTML = appUrl + '/1426377600';
    unixDateLink.href = appUrl + '/1426377600'
})();