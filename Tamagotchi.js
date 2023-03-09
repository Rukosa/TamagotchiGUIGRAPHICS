//Global vars
var currentIdleLoop = 1;
//Actions
const sleep = "sleep";
const feed = "feed";
const play = "play";
//Images we play in delayed loop for animation
/*ex:
feed_image_1 feed_image_2
*/

//Tamagotchi obj
const tamagotchi ={
    width: 50, //img width
    height: 50, //img height
    hunger: 40,
    happiness: 100,
    sleepiness: 50,
};

function standby(){
   //Update hunger/sleepiness/happiness values

   //image flipping
   switch(currentIdleLoop){
    case 1:
        //img = idle_animation_1
        currentIdleLoop++;
        break;
    case 2:
        //img = idle_animation_2
        currentIdleLoop--;
        break;
    //More cases for more anims
   }
}

//Updates screen
function drawTamagotchi(action){
    switch(action){
        case sleep:
            //sleep imgs
            break;
        case feed:
            //feed imgs
            break;
        case play:
            //play imgs
            break;
    }
}

//Feeds pet
function feedTamagotchi(){
    tamagotchi.hunger -= 30;
    drawTamagotchi(feed);
}

//Plays with pet
function playTamagotchi(){
    tamagotchi.happiness += 10;
    tamagotchi.hunger += 10;
    drawTamagotchi(play);
}

//Puts pet to sleep
function sleepTamagotchi(){
    tamagotchi.sleepiness -= 50;
    drawTamagotchi(sleep);
}

//Add button actions and connect to functions

//Game loop
while(true){
    //Delay

    //wait for return of standby
    standby();

    /*
    If action is taken make this loop's execution wait
    for action function to return before continuing
    */
}
