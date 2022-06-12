img="";
status="";
objectDetector="";
objects=[];
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    ObjectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function draw(){
    image(img,0,0,640,420);
    fill(255,0,0);
    text("Dog",45,75);
    noFill();
    stroke(255,0,0);
    rect(30,60,450,350);
    fill(255,0,0);
    text("cat",320,120);
    noFill();
    stroke(255,0,0);
    rect(300,90,270,320);
}
function modelLoaded(){
    console.log("model Loaded!");
    status=true;
    ObjectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}