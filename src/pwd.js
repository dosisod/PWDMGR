clickr.onclick=()=>{
	f.style.visibility="hidden"
	//the "+" and "\n" are there to be consistent with my pas.sh gist
	desc.innerText=btoa(sha512(site.value+"+"+master.value+"\n")).substring(0,len.value)
}