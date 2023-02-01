function popupku() {
  var body = document.querySelector("body");      
  var pWm = document.createElement("a");
  pWm.setAttribute("href", "https://wa.me/6283805005602");
  pWm.setAttribute("style", "text-decoration: none; color: white; opacity: .5; position: fixed; bottom : 10px; left: 10px");
  pWm.innerHTML = "Code By : Irfan Febriansyah";
  body.appendChild(pWm);
}
