
var timeinterval; 
var t; 

/*	
	Sets the end time of the timer
*/ 
function setEndTime(){
	
	var x = document.getElementById("time_vals");
    var min;
    var min = x.value;

	var currentDate = new Date(); 
	var endDate = new Date(currentDate.getTime() + min*60*60*1000);
	if (timeinterval){
		stopClock();
	}
	initializeClock('clockdiv', endDate);

	
	
}

/*	Calculates the difference between the endtime and the 
	current time. 
	
	paramters: Date  
	return: Assocative array (string:int)
*/
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

/* Intailizes and th updates the values in the clock
   
   parameters: int, Date
   return: void 
*/	

function initializeClock(id, endtime){
	
	//Gets references to HTML clock 
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');
	
	function updateClock(){
		
		t = getTimeRemaining(endtime);

		daysSpan.innerHTML = ('0' + t.days).slice(-2);
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
		if(t.total<=0){
			clearInterval(timeinterval);
		}
	}
	updateClock(); 
	timeinterval = setInterval(updateClock,1000);
}

function stopClock(){
	clearInterval(timeinterval);
}

function pause() {
	if (document.getElementById("start_pause").textContent == "Pause"){
		document.getElementById("start_pause").textContent = "Resume";
		clearInterval(timeinterval);
		delete timeinterval; 
	}else {
		document.getElementById("start_pause").textContent = "Pause";
		resume();
	}
	
}

function resume(){
	var newEnd = new Date(Date.parse(new Date()) + t.total);
	initializeClock('clockdiv',newEnd);
}

