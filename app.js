var hide = document.getElementById("container-row");
var btn = document.getElementById("btn-submit");
var show = document.getElementById("show");
var span = document.getElementById("id-selected-btn");
var text = document.querySelectorAll(".btn");
console.log(text);
let btn_id = 3;
btn.onclick = function() {
    hide.style.display = "none";
    show.style.display = "flex";

}
text.forEach(text => text.addEventListener('click', (e) => {
    btn_id = e.target.textContent;
    span.innerHTML = btn_id;
}));