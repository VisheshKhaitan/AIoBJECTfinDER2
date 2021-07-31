

function preload()
{

}

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();

}

function draw()
{
    image(video, 0, 0, 480, 380);
}

function start()
{
    document.getElementById("status").innerHTML = "STATUS : DETECTING OBJECTS";
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded()
{
    console.log("MODEL LOADED!");
    status = true;
}