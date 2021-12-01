function preload(){

}
function setup(){
canvas = createCanvas(700,400);
canvas.position(150,250);
video = createCapture(VIDEO);
video.size(700,400);
video.hide();

}
function draw(){
    image(video,30,50,640,300)
    
    fill(0,250,0);
    stroke(0,250,0);
    rect(26,70,25,280);
    
    fill(0,250,0);
    stroke(0,250,0);
    rect(70,350,550,25);
    
    fill(0,250,0);
    stroke(0,250,0);
    rect(650,50,25,300);
    
    fill(0,250,0);
    stroke(0,250,0);
    rect(70,25,550,25);

    fill(250,0,0);
    stroke(250,0,0);
    circle(40,40,77);

    fill(250,0,0);
    stroke(250,0,0);
    circle(40,360,77);

    fill(250,0,0);
    stroke(250,0,0);
    circle(658,360,77);

    fill(250,0,0);
    stroke(250,0,0);
    circle(658,40,77);
}

