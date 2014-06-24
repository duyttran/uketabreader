if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();

        chrome.runtime.sendMessage({selection: sel.toString()}, function(response) {
        	  console.log("Sending from browser to extension: ");
        	  console.log(sel.toString());
        	});
}


