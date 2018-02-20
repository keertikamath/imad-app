/*console.log('Loaded!');
//change the text of main-text div
var element=document.getElementById('main-text');
element.innerHTML='New value';

//move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft= marginLeft+'px';
}
img.onClick= function(){
    var interval=setInterval(moveRight,100);
};*/

//counter code
var button=document.getElementById('counter');

button.onclick= function()
{
    //create a request object
    var request=new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange= function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            var counter= request.responseText;
            var span= document.getElementById('count');
            span.innerHTML=counter.toString();
        }
    };
    
};