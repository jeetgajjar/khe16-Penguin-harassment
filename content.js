var elements = document.getElementsByTagName('*');
var json_obj = Get('http://lowcost-env.eq2miasqjm.us-west-2.elasticbeanstalk.com/bullyapi');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
	
	
	
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/the/gi, 'json_obj.message');

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