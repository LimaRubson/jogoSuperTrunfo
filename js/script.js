"use strict"

document.addEventListener("DOMContentLoaded", function() {
    console.log("Iniciado!");
    document.getElementById('player').play();
    setTimeout(function() 
    { 
        document.getElementsByClassName("style-fundo")[0].style.background = 'url("img/fundo_02.jpg")';
    }, 6000);
    setTimeout(function() 
    { 
        document.getElementsByClassName("style-fundo")[0].style.background = 'url("img/fundo_03.jpg")';
    }, 9000);
    setTimeout(function() 
    { 
        document.getElementsByClassName("style-fundo")[0].style.background = 'url("img/fundo_04.jpg")';
    }, 12000);
    setTimeout(function() 
    { 
        document.getElementsByClassName("style-fundo")[0].style.background = 'url("img/fundo_05.jpg")';
    }, 15000);
    setTimeout(function() 
    { 
        document.getElementsByClassName("style-fundo")[0].style.background = 'url("img/fundo_06.jpg")';
    }, 18000);
    setTimeout(function() 
    { 
        document.getElementsByClassName("style-fundo")[0].style.background = 'url("img/fundo_01.png")';
    }, 21000);
    console.log("Iniciado!");

    setInterval(function(){

        setTimeout(function() 
        { 
            document.getElementsByClassName("style-fundo")[0].style.background = 'url("img/fundo_02.jpg")';
        }, 6000);
        setTimeout(function() 
        { 
            document.getElementsByClassName("style-fundo")[0].style.background = 'url("img/fundo_03.jpg")';
        }, 9000);
        setTimeout(function() 
        { 
            document.getElementsByClassName("style-fundo")[0].style.background = 'url("img/fundo_04.jpg")';
        }, 12000);
        setTimeout(function() 
        { 
            document.getElementsByClassName("style-fundo")[0].style.background = 'url("img/fundo_05.jpg")';
        }, 15000);
        setTimeout(function() 
        { 
            document.getElementsByClassName("style-fundo")[0].style.background = 'url("img/fundo_06.jpg")';
        }, 18000);
        setTimeout(function() 
        { 
            document.getElementsByClassName("style-fundo")[0].style.background = 'url("img/fundo_01.png")';
        }, 21000);
        console.log("Iniciado!");

    }, 22000);
}); 

    var images = [];
    var cartas = document.getElementsByClassName("style-display-images");

    document.getElementById("style-button-embaralhar").addEventListener("click", function() {
        document.getElementById("style-button-embaralhar").style.display = "none";
        document.getElementsByClassName("style-display-images")[0].style.display = "block";
        document.getElementsByClassName("style-display-images")[1].style.display = "block";
        document.getElementsByClassName("style-display-images")[2].style.display = "block";
        document.getElementsByClassName("style-display-images")[3].style.display = "block";
        document.getElementsByClassName("style-display-images")[4].style.display = "block";
        document.getElementsByClassName("style-display-images")[5].style.display = "block";
        document.getElementsByClassName("style-display-images")[6].style.display = "block";
        document.getElementsByClassName("style-display-images")[7].style.display = "block";
        document.getElementsByClassName("style-display-images")[8].style.display = "block";
        document.getElementsByClassName("style-display-images")[9].style.display = "block";
        document.getElementsByClassName("style-display-images")[10].style.display = "block";
        document.getElementsByClassName("style-display-images")[11].style.display = "block";
        document.getElementsByClassName("style-display-images")[12].style.display = "block";
        document.getElementsByClassName("style-display-images")[13].style.display = "block";
        document.getElementsByClassName("style-display-images")[14].style.display = "block";
        document.getElementsByClassName("style-display-images")[15].style.display = "block";
        document.getElementsByClassName("style-display-images")[16].style.display = "block";
        document.getElementsByClassName("style-display-images")[17].style.display = "block";
        document.getElementsByClassName("style-display-images")[18].style.display = "block";
        document.getElementsByClassName("style-display-images")[19].style.display = "block";
        document.getElementsByClassName("style-display-images")[20].style.display = "block";
        document.getElementsByClassName("style-display-images")[21].style.display = "block";
        document.getElementsByClassName("style-display-images")[22].style.display = "block";
        document.getElementsByClassName("style-display-images")[23].style.display = "block";
        document.getElementsByClassName("style-display-images")[24].style.display = "block";

        for (var i = 0; i < 25; i++) {
            var img = {
                src: "img/"+ i +".png",
                id: i%8
            };
            images.push(img);
        
        }
        
        function randomSort(oldArray) {
        
            var newArray = [];
        
            while(newArray.length !== oldArray.length){
                var i = Math.floor(Math.random()*oldArray.length);
        
                if(newArray.indexOf(oldArray[i]) < 0){
                    newArray.push(oldArray[i])  
                }
            }
        
            return newArray;
        }
    
        images = randomSort(images);
    
        for(var i = 0; i < 25; i++){
    
            cartas[i].setAttribute("src",images[i].src);
        }    
    
    });    
