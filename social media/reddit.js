
//var elements = document.getElementsByTagName('//*[@id="content"]/div/div/div/div/div[1]/h2/text()[1]*');

//from Tyler
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];



    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            //var replacedText = text.replace(/Connect/gi, 'BUULLL89Y!!!');

			//from Tyler
			var start_sig = '<div class="_3hi clearfix"><div class="_38 direction_ltr"><span class="null"><p>';
			var end_sig = '</p></span></div><div class="_1yr">'
			var full_sig = '/' + start_sig + '*' + end_sig + '/gi';
			var replacedText = text.replace(full_sig,'IT IS WORKING!');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
