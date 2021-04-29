var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", function(Img) {
	player_object = Img;

    player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

if(key=='70'){
	block111("https://th.bing.com/th/id/Rd5b970d944f82850b72b9da12e54925c?rik=Fv%2bVm3xixINoeg&pid=ImgRaw");

}
if(key=='66'){
	block111("./spiderman_body.png");
}
if(key=='76'){
	block111("./hulk_legs.png");
}
if(key=='82'){
	block111("./thor_right_hand.png");
}
if(key=='72'){
	block111("./captain_america_left_hand.png");
}

if(key=='38'){
	up();
}
if(key=='40'){
	down();
}
if(key=='39'){
	right();
}
if(key=='37'){
	left();
}


function up()
{
	if(player_y >=0)
{
	player_y = player_y - block_image_height;
	console.log("block image height = " + block_image_height);
	console.log(" When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
	canvas.remove(player_object);
	player_update();
}
}

function down()
{
	if(player_y <=500)
{
	player_y = player_y + block_image_height;
	console.log("block image height = " + block_image_height);
	console.log(" When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
	canvas.remove(player_object);
	player_update();
}
}

function left()
{
	if(player_x >0)
{
	player_x = player_x - block_image_height;
	console.log("block image height = " + block_image_height);
	console.log(" When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
	canvas.remove(player_object);
	player_update();
}
}

function right()
{
	if(player_x <=850)
{
	player_x = player_x - block_image_height;
	console.log("block image height = " + block_image_height);
	console.log(" When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
	canvas.remove(player_object);
	player_update();
}
}