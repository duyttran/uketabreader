var gchannel = new Audio();
var cchannel = new Audio();
var echannel = new Audio();
var achannel = new Audio();

function playUkulele(gfret, cfret, efret, afret){

	/*
	 * for makign sure all notes are valid. really just don't do anything
	 * old code for entering a single chord
	if(!validateNote(gfret) && !validateNote(cfret) && !validateNote(efret) && !validateNote(afret)) {
		alert("enter some fret numbers!" + gfret + cfret + efret + afret);
	}
	*/	

	
	if(validateNote(gfret)) {
		gchannel = gnotes[gfret];
		gchannel.pause();
		gchannel.currentTime = 0;
		gchannel.play();
		
	}
	
	if(validateNote(cfret)) {
		cchannel = cnotes[cfret];
		cchannel.pause();
		cchannel.currentTime = 0;
		cchannel.play();
	}
	
	if(validateNote(efret)) {
		echannel = enotes[efret]
		echannel.pause();
		echannel.currentTime = 0;
		echannel.play();
	}
	
	if(validateNote(afret)) {
		achannel = anotes[afret];
		achannel.pause();
		achannel.currentTime = 0;
		achannel.play();
	} 

}

function validateNote(note) {
	return !isNaN(parseInt(note));
}

