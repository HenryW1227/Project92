function adduser()
{
    player1name = document.getElementById("player1_name_input").value;
    player2name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1n",player1name);
    localStorage.setItem("player2n",player2name);

    window.location = "gamepage.html"

}
