// Crie a função login aqui.
function login()  {

    player_name = document.getElementById("playername").ariaValueMax;
    localStorage.setItem("player_name", player_name);

    window.location = "gemepage.html";



}