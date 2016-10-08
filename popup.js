var xhr = new XMLHttpRequest();
xhr.open("GET", "http://lowcost-env.eq2miasqjm.us-west-2.elasticbeanstalk.com/bullyapi", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    document.getElementById("status").innerText = (JSON.parse(xhr.responseText)).getElementById('message');
  }
}
xhr.send();