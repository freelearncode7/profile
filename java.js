btn_open = document.querySelector('#btn-profile');
profile = document.querySelector('#profile');
close_btn = document.querySelector('#close');
btn_open.addEventListener('click', function() {
    profile.style.display = "flex";

});
close_btn.addEventListener('click', function() {
    profile.style.display = "none";
})