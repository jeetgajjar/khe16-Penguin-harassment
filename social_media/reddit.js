function getJson(){
	var elements = document.getElementsByTagName('div');
	var jsonBundle = {};
	jsonBundle['location'] = 'reddit';
	jsonBundle['time'] = (new Date()).getTime();
	var count = 0;
	for (var i = 0; i < elements.length; i++) {
	   var element = elements[i];
	   if(element.getAttribute("class") == "md"){
		   var textR = element.innerHTML;
		   jsonBundle['log' + toString(count)] = {"text": textR, "local": localParse(element)}
		   count ++;
	   }
	}
	return jsonBundle;
}

function localParse(elem){
	//elem.parentNode.replaceChild(document.createTextNode(textR), elem);
	return "local assesment";
}

var getJSON = function(url, successHandler, errorHandler) {
	var xhr = typeof XMLHttpRequest != 'undefined'
		? new XMLHttpRequest()
		: new ActiveXObject('Microsoft.XMLHTTP');
	xhr.open('get', url, true);
	xhr.responseType = 'json';
	xhr.onreadystatechange = function() {
		var status;
		var data;
		if (xhr.readyState == 4) { 
			status = xhr.status;
			if (status == 200) {
				successHandler && successHandler(xhr.response);
			} else {
				errorHandler && errorHandler(status);
			}
		}
	};
	xhr.send();
};

var JSTR = JSON.stringify(getJson());
getJSON('https://www.harrestment.com/bully/:' + JSTR, function(data) {
	
}, function(status) {
	alert(JSTR);
});

