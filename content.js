
//var elements = document.getElementsByTagName('//*[@id="content"]/div/div/div/div/div[1]/h2/text()[1]*');

//from Tyler
var start_sig = 'Russia';
var end_sig = 'US'
var full_sig = start_sig + '[^]*?' + end_sig;
var full_regex = new RegExp(full_sig, 'ig');
var replace_text = start_sig + 'IT IS WORKING' + end_sig;

/**
var html = document.body.innerHTML;
alert(html);
var replaceText = html.replace(full_regex,replace_text);
if (replacedText !== html) {
	document.getElementsByTagName('body')[0].textContent = replaceText;
	alert('Replacing!');
}


	*/
var elements = document.getElementsByTagName('body');
//alert(elements.length + '\nReplace ' + full_sig + '\nWith ' + replace_text);

for (var i = 0; i < elements.length; i++) {
    var text = elements[i].textContent;
	//alert(element);

	var replacedText = text.replace(full_regex,replace_text);

	if (replacedText !== text) {
		alert(text);
		elements[i].textContent = replacedText;
		alert(replacedText);
	}

	/**
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            //var replacedText = text.replace(/Connect/gi, 'BUULLL89Y!!!');

			//from Tyler

			var replacedText = text.replace(full_regex,replace_text);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
				alert('Replacing!');
            }
        }
    }*/
}
