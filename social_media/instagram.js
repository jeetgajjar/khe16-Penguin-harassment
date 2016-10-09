//I'm Alive!
alert("Hey");
var elements = document.getElementsByTagName('*'); //gets all tags

for (var i = 0; i < elements.length; i++) {
   var element = elements[i];
   console.log(elements.length);
   for (var j = 0; j < element.childNodes.length; j++) {
       var node = element.childNodes[j];

       if (node.nodeType === 3) {
           var text = node.nodeValue;
           var replacedText = text.replace(/hi/gi, "I'm Alive");
           
           if (replacedText !== text) {
               element.replaceChild(document.createTextNode(replacedText), node);
           }
       }
   }
}
