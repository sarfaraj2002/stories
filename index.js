function move(x)
{
    let element=document.querySelector(x).style;
    if(element.float==='left')
    {
        element.float='right';
    }
    else
    {
        element.float='left';
    }

}


function blink(y)
{
    let body= document.querySelector(y);
    if (body.style.visibility==='hidden')
    {
        body.style.visibility='visible';
    }
    else
    {
        body.style.visibility='hidden';
    }

}

function blinkme()
{
    blink('#me')
}

window.setInterval(blinkme,500);

//blink every 500 milisecond


function door(door,openbutton,closebutton,article){
    document.getElementById(door).src='article2/door3.jpg';
    blink(openbutton);
    blink(closebutton);
    blink(article);
}
function closedoor(door,openbutton,closebutton,article)
{
    document.getElementById(door).src='article2/door1.jpg';
    blink(openbutton);
    blink(closebutton);
    blink(article);
}
