document.getElementById("clickr").onclick=()=>{
	//document.getElementById() wrapper
	d=(e)=>{return document.getElementById(e).value}
	
	//the "+" and "\n" are there to be consistent with my pas.sh gist
	desc.innerText=btoa(sha512(d("site")+"+"+d("master")+"\n")).substring(0,d("len"))
}