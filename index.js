var screen=document.getElementById('screen');
var buttons=document.getElementsByClassName('btn');

var screenValue='';

for(var i=0;i<buttons.length;i++){
       buttons[i].addEventListener('click',(e)=>{

        var text=e.target.innerText;
        // console.log(text);
       
        if(text=='ON'){
            screen.value="CALCULATOR IS READY ";
            screenValue="";
        }
        else if(text=='OFF'){
            screen.value="";
        }
        else if(text=='X'){
            text='*';
            screenValue+=text;
            screen.value=screenValue;
        }
        else if(text=='AC'){
            screenValue="";
            screen.value="0";
        }
        else if(text=='=')
        {
            screen.value=eval(screenValue);
            screenValue=screen.value;
        }
        else 
        {
            screenValue+=text;
            screen.value=screenValue;
        }

       });
}