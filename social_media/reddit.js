//I'm Alive!
var elements = document.getElementsByTagName('*'); //gets all tags

for (var i = 0; i < elements.length; i++) {
   var element = elements[i];

   for (var j = 0; j < element.childNodes.length; j++) {
       var node = element.childNodes[j];

       if (node.nodeType === 3) {
           var text = node.nodeValue;
           var replacedText = text.replace(/hi/gi, "I'm Alive");

          // parser = new DOMParser();
          //htmlDoc= parser.parseFromString(txt, "text/xml");

           if (replacedText !== text) {
               element.replaceChild(document.createTextNode(replacedText), node);
           }
       }
   }
}
