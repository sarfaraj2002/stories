let i=1;
function blink()
{
    let body= document.querySelector('#logo');
    if (body.style.visibility==='hidden')
    {
        body.style.visibility='visible';
    }
    else
    {
        body.style.visibility='hidden';
    }
}
//blink every 500 milisecond
window.setInterval(blink,500);

let a=0;
function stopmusic()
{
    window.clearInterval(a)
    let music=document.getElementById('music');
    let marvel=document.getElementById("anthem");
    if(i%2==1)
    {
        let marvel=document.getElementById("marvel");
        marvel.pause();

    }
    else
    {
        marvel.pause();
    }

    music.src='music1.gif';

}
function animates()
{
    var leave=document.getElementById('leaves');
    leave.src='leaves.gif';
}



function playmusic()
{
    i++
    let marvel=document.getElementById("anthem");
    let music=document.getElementById('music');
    if(i%2==1)
    {
        let marvel=document.getElementById("marvel");
        marvel.play();
        a=window.setInterval(stopmusic,20000);
    }
    else
    {
        marvel.play();
        a=window.setInterval(stopmusic,20500)
    }

    music.src='music.gif';
    animates();
    


}



