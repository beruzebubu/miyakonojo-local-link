function scrollToLogin(){
  document.getElementById("login").scrollIntoView({behavior:"smooth"});
}
function showLogin(){
  document.getElementById("modalTitle").textContent = "ログイン";
  document.getElementById("invite").style.display = "block";
  document.getElementById("modal").classList.remove("hidden");
}
function showSignup(){
  document.getElementById("modalTitle").textContent = "新規会員登録";
  document.getElementById("invite").style.display = "block";
  document.getElementById("modal").classList.remove("hidden");
}
function closeModal(){
  document.getElementById("modal").classList.add("hidden");
}
