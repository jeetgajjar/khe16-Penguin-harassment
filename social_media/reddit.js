/**
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
	alert('https://www.harrestment.com/bully/:' + JSTR);
});

function getNLP(params){
	unirest.get("https://twinword-sentiment-analysis.p.mashape.com/analyze/?text=" + params + "\"")
	.header("X-Mashape-Key", "yeyrWnVD5amshxr2EnXiDEIfct4ap1XPawZjsnPKXfnAZdu4Tf")
	.header("Accept", "application/json")
	.end(function (result) {
		console.log(result.status, result.headers, result.body);
		alert(result.body);
	});
}*/

function localParse(){
	var elements = document.getElementsByTagName('div');
	var count = 0;
	for (var i = 0; i < elements.length; i++) {
	   var element = elements[i];
	   if(element.getAttribute("class") == "md"){
		   var textR = "[[[" + element.innerHTML + "]]](" + getSentimentXML(parseInnerHtml(element.innerHTML)) + ")";
		   element.parentNode.replaceChild(document.createTextNode(textR), element);
		   count ++;
	   }
	}
	return jsonBundle;
}


function getSentimentXML(params){
	var jr = new XMLHttpRequest();
	jr = open('GET', "https://twinword-sentiment-analysis.p.mashape.com/analyze/?text=" + params + "\"",true);
	jr.responseType = 'json';
	jr.setRequestHeader('X-Mashape-Key','yeyrWnVD5amshxr2EnXiDEIfct4ap1XPawZjsnPKXfnAZdu4Tf');
	jr.setRequestHeader('Accept','application/json');
	jr.onload = function() {
		var status;
		var data;
		if (xhr.readyState == 4) { 
			status = xhr.status;
			if (status == 200) {
				console.log(result.status, result.headers, result.body);
				alert(result.body.score);
				return result.body.score;
			} else {
				alert('bad');
				//errorHandler && errorHandler(status);
			}
		}
	};
	xhr.send();
}

function getSentiment(params){
	$.getJSON( "https://twinword-sentiment-analysis.p.mashape.com/analyze/?text=" + params + "\"", 
	{
		'X-Mashape-Key': 'yeyrWnVD5amshxr2EnXiDEIfct4ap1XPawZjsnPKXfnAZdu4Tf',
		'Accept': 'application/json'
	}).done(function(data){
		alert(data.score);
		return data.score;
	});
}

function parseInnerHtml(input){
	var txt = input.replace(/<[^]*?>/gi,'+');
	txt = txt.replace(/\s/gi,'+');
	txt = txt.replace(/[+]+/gi,'+');
	alert(txt);
	return txt;
}
localParse();
//document.write('<script src="./static/jquery/jquery.js" type="text/javascript"></script>');
//jquery(document).ready(function($){localParse();});
