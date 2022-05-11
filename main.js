function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 450);
    canvas.position(560, 100);
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose', gtposes);
}

function draw(){
background('#D4F3FA ')
}

function modelloaded(){
    console.log("me is loaded");
}

function gtposes(results){
    if(results.length>0){
        console.log(results)
    }
}