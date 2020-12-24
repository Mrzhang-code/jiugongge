var box = document.getElementsByClassName("box");
function getcolor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    if(b!==0&&r!==255&&g!==165){
        return "rgb("+ r +","+ g +","+ b +")";
    }else{
        getcolor();    }
    
};
function getbox(){
    var x = Math.floor(Math.random()*9);
    var y = Math.floor(Math.random()*9);
    var z = Math.floor(Math.random()*9);
    if(x!==y&&y!==z&&z!==x){
        box[x].style.backgroundColor = getcolor();
        box[y].style.backgroundColor = getcolor();
        box[z].style.backgroundColor = getcolor();
    }else{
        getbox();
    }
};
var start = document.getElementById("bt1");
var stop = document.getElementById("bt2");
var i;
start.onclick = function(){
        this.style.color = "white";
        this.style.backgroundColor = "orange";
        stop.style.color = "orange";
        stop.style.backgroundColor = "white";
        clearInterval(i);
        i = setInterval(function(){
            for(var j = 0;j< 9;j++){
                box[j].style.backgroundColor ="";
            }
            getbox();
            },1000)
};
stop.onclick = function(){
        this.style.color = "white";
        this.style.backgroundColor = "orange";
        start.style.color="orange";
        start.style.backgroundColor="white";
        clearInterval(i);
        for(var j = 0;j< 9;j++){
            box[j].style.backgroundColor ="";
        }
    };
