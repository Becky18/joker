nose_x=0
nose_y=0


function preload(){
clown_nose=loadImage('https://i.postimg.cc/tg8xdbNw/red-removebg-preview.png')
}

function setup(){
canvas = createCanvas(600,400);
canvas.center();
video=createCapture(VIDEO);
video.size(600,400);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log("PoseNet model has started!!:)");
}
function draw(){
image(video,0,0,600,400);
//fill(255,0,0)
//stroke(255,0,0)
//circle(nose_x,nose_y,35);
image(clown_nose,nose_x-15,nose_y-10,35,35)
}
function take_snapshot(){
    save("joker.png");
}
function gotPoses(results){
    // console.log("got poses")
if(results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x
    nose_y=results[0].pose.nose.y
        console.log("nose x ="+nose_x);
    console.log("nose y ="+nose_y);
}
}

