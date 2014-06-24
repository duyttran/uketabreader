

// Called when the user clicks on the browser action.


  
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('retrieving tab from selected text on page');
  chrome.tabs.executeScript(null, {file: 'gettab.js'});
  
});



chrome.runtime.onMessage.addListener(
		  function(request, sender, sendResponse) {
		    console.log(sender.tab ?
		                "from a content script:" + sender.tab.url :
		                "from the extension");
		    var textSelection = request.selection;
		    console.log("submitting to playEntry(): ");
		    console.log(textSelection);
		    
		    console.log("tabIsPlaying, playTab: " + booleanTabIsPlaying + ", " + booleanPlayTab);
		    if (booleanTabIsPlaying) {
		    	stopPlaying();
		    } else {
		    	booleanPlayTab = true;
		    	playEntry(textSelection);		    	
		    }
});

