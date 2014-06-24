var timerId;
var booleanTabIsPlaying = false;
var booleanPlayTab = true;

//var gstring = new Array();
//var cstring = new Array();
//var estring = new Array();
//var astring = new Array();

function stopPlaying() {
	booleanTabIsPlaying = false;
	booleanPlayTab = false;
	clearInterval(timerId)
	timerId = null;
}


//function playSong(barnumber) {
//
//	if(barnumber < gstring.length ) {
//		
//		timerId = setTimeout(function(){playSong(++barnumber)}, 500);//chordlength[barnumber]*1000);
//		
//		console.log("Playing (g,c,e,a): " 
//				+ "(" + gstring[barnumber] + ", " + cstring[barnumber] 
//				+ ", " + estring[barnumber] + ", " + astring[barnumber] + ")");
//		
//		playUkulele(gstring[barnumber], cstring[barnumber], estring[barnumber], astring[barnumber]);
//	} 
//}

function playSong(gstring, cstring, estring, astring) {
	
	function iterateThroughSong(barnumber) {

		console.log("barnumber, length : (" + barnumber + ", " + gstring.length + ")");
		if(barnumber < gstring.length && booleanPlayTab) {
			
			booleanTabIsPlaying = true;
			
			timerId = setTimeout(function(){iterateThroughSong(++barnumber)}, 500);//chordlength[barnumber]*1000);
			
			console.log("Playing (g,c,e,a): " 
					+ "(" + gstring[barnumber] + ", " + cstring[barnumber] 
					+ ", " + estring[barnumber] + ", " + astring[barnumber] + ")");

			playUkulele(gstring[barnumber], cstring[barnumber], estring[barnumber], astring[barnumber]);
		} else {
			booleanTabIsPlaying = false;
		}
	}
	iterateThroughSong(0);
	
}

function playEntry(uketab) {
	var stringsArray = uketab.split(/\n|\r/);
//	gstring = stringsArray[3];
//	cstring = stringsArray[2];
//	estring = stringsArray[1];
//	astring = stringsArray[0];
	
	var gstring = stringsArray[3];
	var cstring = stringsArray[2];
	var estring = stringsArray[1];
	var astring = stringsArray[0];
	console.log("gstring length: " + gstring.length);
	console.log("cstring length: " + cstring.length);
	console.log("estring length: " + estring.length);
	console.log("astring length: " + astring.length);
	try {
		playSong(gstring, cstring, estring, astring);
	} catch (err) {
		console.log("Error thrown: " + err.message);
	}	
	
}
