p1n = localStorage.getItem('player1n')
p2n = localStorage.getItem('player2n')
p1s = 0
p2s = 0
document.getElementById('player1_name').innerHTML = p1n + ": "
document.getElementById('player1_score').innerHTML = p1s
document.getElementById('player2_name').innerHTML = p2n + ": "
document.getElementById('player2_score').innerHTML = p2s
document.getElementById('qturn').innerHTML = "Question Turn - " + p1n
document.getElementById('aturn').innerHTML = "Answer Turn - " + p2n
var qt = "p1"
var at = "p2"

function send()
{
n1 = document.getElementById('in1').value
n2 = document.getElementById('in2').value
q = "<h2>Q. "+n1+" X "+n2+" </h2>"
a = "<h3>A. <input id='ans' >"
s = " <button onclick='submit()' >Submit</button> "
f = q + a + s
document.getElementById('output').innerHTML = f
}

function submit()
{
    givenanswer = document.getElementById("ans").value
    realanswer = n1 * n2

    if(givenanswer == realanswer)
    {
        if(qt == "p1")
        {
            p2s = p2s + 1
            qt = "p2"
            at = "p1"
        }
        else
        {
            p1s = p1s + 1
            qt = "p1"
            at = "p2"
        }
    }
    else
    {
        if(qt == "p1")
        {
            qt = "p2"
            at = "p1"
        }
        else
        {
            qt = "p1"
            at = "p2"
        }
    }

    document.getElementById("output").innerHTML = ""
    document.getElementById("player1_score").innerHTML = p1s
    document.getElementById("player2_score").innerHTML = p2s
    document.getElementById("in1").innerHTML = ""
    document.getElementById("in2").innerHTML = ""
    if(qt == "p1")
    {
    document.getElementById('qturn').innerHTML = "Question Turn - " + p2n
    document.getElementById('aturn').innerHTML = "Answer Turn - " + p1n
    }
    else
    {
        document.getElementById('qturn').innerHTML = "Question Turn - " + p1n
        document.getElementById('aturn').innerHTML = "Answer Turn - " + p2n
    }
}