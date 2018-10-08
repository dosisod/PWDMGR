document.getElementById("clickr").addEventListener("click", function(event) {
	site=document.getElementById("site").value
	master=document.getElementById("master").value
	len=document.getElementById("len").value

	document.getElementById("desc").innerHTML=btoa(md5(site+"+"+master)).substring(0,len)
}, false);
