var gnotes = new Array();
var cnotes = new Array();
var enotes = new Array();
var anotes = new Array();


function loadAudio(url, vol){
	var audio = new Audio();
	audio.src = url;
	audio.preload = "auto";
	audio.volume = vol;
	return audio;
}

function preloadNotes() {

	for(i=0;i<12;i++){
		gnotes[i] = loadAudio('ukulelesamples/g' + i + '.wav', 1);
	}
	
	for(i=0;i<12;i++){
		cnotes[i] = loadAudio('ukulelesamples/c' + i + '.wav', 1);
	}
	
	for(i=0;i<12;i++){
		enotes[i] = loadAudio('ukulelesamples/e' + i + '.wav', 1);
	}
	
	for(i=0;i<12;i++){
		anotes[i] = loadAudio('ukulelesamples/a' + i + '.wav', 1);
	}

}

preloadNotes();