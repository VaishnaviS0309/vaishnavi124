function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 530);
    video.position(100 , 130);

    canvas=createCanvas(550 , 530);
    canvas.position(950 , 130);

    poseNet = ml5.poseNet(video , modelLoaded);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
    poseNet.on('pose' , gotPoses);
}

function draw(){
    background('#c157fa');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}