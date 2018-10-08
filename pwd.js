document.getElementById("clickr").addEventListener("click", function(event) {
	site=document.getElementById("site").value
	master=document.getElementById("master").value
	len=document.getElementById("len").value

	//the "+" and "\n" are there to be consistent with my pas.sh gist
	document.getElementById("desc").innerHTML=btoa(sha512(site+"+"+master+"\n")).substring(0,len)
}, false);
