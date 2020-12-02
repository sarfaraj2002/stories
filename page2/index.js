
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

function blinkbatch()
{
    blink('#batches')
}
window.setInterval(blinkbatch,500);