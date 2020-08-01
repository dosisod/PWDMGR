select = x => document.querySelector(x);

document.addEventListener("DOMContentLoaded", e => {
  select("input[type=submit]").onclick = e => {
    select("form").style.visibility="hidden";

    let pwd="";
    sha512.array(site.value + master.value)
      .forEach(x => pwd += String.fromCharCode(x));

    select("p").innerText=btoa(pwd)
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "")
      .substring(0, len.value);

    e.preventDefault();
  };
});