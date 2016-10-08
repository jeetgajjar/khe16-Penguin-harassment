
var elements = document.getElementsByTagName('//*[@id="content"]/div/div/div/div/div[1]/h2/text()[1]*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
	
	
	
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            var replacedText = text.replace(/Connect/gi, 'BUULLL89Y!!!');


            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

function Get(url){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
		console.log('asdf' + xhr.responseText);
	  }
	}
	xhr.send();
}
