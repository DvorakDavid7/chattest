
var center = {
    x: 500,
    y: 275,
}


function angle(x1,y1,x2,y2){

    var radius = dist(x1,x2,y1,y2);
    push();
    translate(x1, y1);
    var a = atan2(y2 - height / 2, x2 - width / 2);
    pop();
    return(-a);

};



var allP = [];
function projectileFromAngle(x,y,angle,speed,c){

    this.x = x;
    this.y = y;
    this.theta = angle;//degrees


    this.speed = speed;
    this.continue = c;


    allP.push(this);

};
projectileFromAngle.prototype.build = function(){
    this.tx = this.x+ this.speed*cos(this.theta);
    this.ty = this.y- this.speed*sin(this.theta);
};
projectileFromAngle.prototype.update = function(){
    this.x=this.tx;
    this.y=this.ty;
    this.tx = this.x+ this.speed*cos(this.theta);
    this.ty = this.y- this.speed*sin(this.theta);

};
projectileFromAngle.prototype.draw = function(){
    push();
    translate(this.x,this.y);
    rotate(-this.theta)
    rect(-55,-3/2,55,3)
    pop();
};


//==========================================================//
function buildProjectiles(){

    for(var i=0; i < allP.length; i++){
        allP[i].build();
    }

};
function updateProjectiles(){

    for(var i=0; i < allP.length; i++){
        allP[i].update();
    }

};
function drawProjectiles(){

    for(var i=0; i < allP.length; i++){
        allP[i].draw();
    }

};

function getAllProjectiles(){
    buildProjectiles();
    updateProjectiles();
    drawProjectiles();
};


function setup() {
    createCanvas(1000,550);
    angleMode(DEGREES);
    frameRate(60);
}

function draw() {
    background(200,200,200);
    ellipse(500,275,20,20);//Player
    getAllProjectiles();
    //-------------------------//
    if(mouseIsPressed){
        //new projectileFromAngle(500,275,angle(center.x,center.y,mouseX,mouseY),20 );
    }
}//draw
//

function mousePressed(){
    new projectileFromAngle(500,275,angle(center.x,center.y,mouseX,mouseY),20 );
}
