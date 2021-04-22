//variables 
var database;
var dog, dogImg, happyDog;
var foodS = 20;
var lastFed = 0;
var foodObj = null;
var feedButton, addButton;

//load images
function preload()
{
  backgroundImg = loadImage("images/bg.png");
  dogImg = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");
  opinionImg = loadImage("images/comment.png");
}


function setup() {

 
  createCanvas(800, 500);

   var greeting = createElement('h3');
   var greeting1 = createElement('h3');
  

  feedButton = createButton("Feed your dog");
  feedButton.position(700, 95);
  feedButton.mousePressed(feedDog);

  
  input = createInput ("type you'r dog's name"); 
  input.position (500, 95); 

  var name = input.value();

  input1 = createInput ("type opinion about your dog"); 
  input1.position (850, 470);
  var opinion = input1.value();

  var button = createButton("submit");
  button.position(850, 500);
  
  
  addButton = createButton("Buy Milk Bottles $");
  addButton.position(820, 95);
  addButton.mousePressed(addFood);

  button.mousePressed(function(){
    input.hide();
    addButton.hide();
    feedButton.hide();
   
    comment = createSprite(490,210);
    comment.scale = 0.7;
    comment.addImage("opinion", opinionImg);
    greeting.html("Thank you😀😄 ");
    greeting.position(800, 150);
    greeting1.html("see you later!");
    greeting1.position(805, 195);
 })


  //create foodObj
  foodObj = new Food();

  //create dog
  dog = createSprite(650, 280);
  dog.scale = 0.3;
  dog.addImage("dog1", dogImg);
  dog.addImage("dog2", happyDog);

  
}


function draw() {  

  //background
  background(backgroundImg);

  //display last fed
  fill("white");
  textSize(15);
  if(lastFed>=12){
    text("Last Fed [approx timing] : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Fed [approx timing] : 12 AM",350,30);
   }else{
     text("Last Fed [approx timing] : "+ lastFed + " AM", 350,30);
   }

   //draw all sprites
  drawSprites();

  //display food stock
  strokeWeight(3);
  stroke("black")
  fill("white");
  textSize(30);
  text("Milk bottles in stock : " + foodS, 30, 300);

  strokeWeight(3);
  stroke("white")
  fill("black");
  textSize(20);
  text("please fill after enjoying the game", 350, 410);

  
  foodObj.display();

}



function addFood(){
  foodS++;
  foodObj.updateFoodStock(foodS);
}



function feedDog(){
  if(foodS > 0){
    dog.changeAnimation("dog2", happyDog);
    foodS--;
    foodObj.updateFoodStock(foodS);
    lastFed = hour();
    foodObj.updateLastFed(lastFed);
  }
}

/*
//Create variables here
var database;
var dog,dogImage,dogImage1,food,foodImage,foodStock,foodRef;

function preload()
{
  //load images here
  backgroundImg = loadImage("images/bg.png");
  dogImage = loadImage("images/Dog.png");
  dogImage1 = loadImage("images/happydog.png");
  foodImage = loadImage("images/Bone.png");
  bathImage = loadImage("images/bath.png");
  sleepImage = loadImage("images/sleep.png");
  playImage = loadImage("images/play.png");
  walkImage = loadImage("images/walk.png");
  

}

function setup() {
  createCanvas(480, 480);

  //Sprites

  food = createSprite(250,400,50,50);
  food.addImage(foodImage);
  food.scale = 0.3;


  dog = createSprite(400,150);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  //Firebase
  database = firebase.database();

  //Reference for food
  foodRef = database.ref("Food");
  foodRef.on("value",read,console.log("error"));

  foodRef.set(20);


}


function draw() {  
  background(backgroundImg);
  drawSprites();
  
  //add styles here
  textSize(32);
  fill("blue");
  text("Bones in the Stock: "+foodStock,50,300);
 // textSize(25);
  //text("Hi! Will you help me in doing some works ?",50,70)
  decreaseFood();
  if(foodStock===0){
    foodStock = 20;
  }

  if(keyWentUp(DOWN_ARROW)){
    
    dog.addImage(bathImage);
    
    
  }

  if(keyWentUp(LEFT_ARROW)){
   
    dog.addImage(sleepImage);
    dog.scale = 0.3
    
    
  }

  if(keyWentUp(RIGHT_ARROW)){
   
    dog.addImage(playImage);
    dog.scale = 0.3
    
    
  }

  if(keyCode === 32){
    
    dog.addImage(walkImage);
    dog.scale = 0.3
 }

}

function read(data){
  foodStock = data.val();
}

function decreaseFood(){
  if(keyWentDown(UP_ARROW)){
  foodRef = database.ref("Food");
  foodStock = foodStock - 1;
  foodRef.set(foodStock);
  dog.addImage(dogImage1);
  food.x = 350;
  food.y = 200;
  food.scale = 0.1;

  }
  
  if(keyWentUp(UP_ARROW)){
    
    foodStock = foodStock;
    dog.addImage(dogImage);
    fill("yellow");
    text('Thank you ,10,80);
    food.x = 250;
    food.y = 400;
    food.scale = 0.2;
    
  }
}

*/