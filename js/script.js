$(document).ready(function(){
 		
 		//Check that jQuery is working
		$(".jqworks").append("<p>jQuery at work</p>");
		//Make cookies draggable
		$("#draggable").draggable();
		//Slim image shakes like an 8-ball
		$("#slim").click(function() {
			
  			$(this).effect( "shake", { times: 2 }, "slow" );
});
		//Randomly assign a piece of advice and display it alongside Slim
		$(function () {

			var today = new Date();
			var nov14a = new Date("2017-11-14 0:00:00");
			var nov14z = new Date("2017-11-14 23:59:59")

			if(today > nov14a && today < nov14z){
    			// True if today is 14 Nov
	    		var hb = $('#slimSays');
	    		hb.text("Happy Birthday!");

			} else {
			
    			// Today is not 14th Nov
			var adviceList = [
		    "Wow, what the fuck happened last night, where am I? Man fuck am I hungover and god damn I got a headache. Oh well, nothing a few cookies can't fix!",
		    "The only thing I love more than rap is cookies. I love eating cookies.",
		    "We 'll walk this road together, through the storm. Whatever weather, cold or warm.", 
		    "Just letting you know that you're not alone, holler if you feel like you've been down the same road ", 
		    "This is what I'll give ya, a little bit of weed mixed with some hard liquor. Then dip one of my cookies in it and enjoy!", 
		    "Here's my ten cents, my two cents is free...", 
		    "Sing with me, sing for the years sing for the laughter, sing for the cookies, sing for the tears, (come on) Sing it with me, just for today, maybe tomorrow the good Lord will take you Away", 
		    "Have a cookie.", 
		    "Tonight, clean out your closet. Then fill it with cookies.",
		    "The writing process, the way I go about it is I do whatever the beat feels like, eat a cookie, then whatever the beat is telling me to do. Usually when the beat comes on, I think of a hook or the subject I want to rap about almost instantly. Within four, eight bars of it playing Im just like, Oh, OK. This is what I wanna do.", 
			];

		    $( "#slim" ).click(function() {
		      var adviceId = Math.floor((Math.random()*10));
		      var advice = $('#slimSays');
		      advice.text(adviceList[adviceId]);
		    });

		}

		});



		

	});