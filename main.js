function preload(){
     video = createCapture(VIDEO)
     video.hide()
}

function setup(){
     cancas = createCanvas(800,500)
     cancas.position(50,200)
     video = createCapture(VIDEO)
     video.hide()
}


function draw(){
    
     fill("green")
     stroke("none")
     rect(50,40,700,25)
     rect(50,445,700,25)
     rect(750,40,25,425)
     rect(50,40,25,425)

      fill("red")
     circle(50,50,90)
     circle(750,50,90)
     circle(50,450,90)
     circle(750,450,90)

     image(video,200,100,400,300)
     //tint(color_tint)
}

function take_snapshot(){
     save("any other name.png")
}

function filter_tint(){
     color_tint = document.getElementById("color_of_tint").value;
}

