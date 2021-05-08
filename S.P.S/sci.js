/* caching the dom object*/
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
var r = 0;
var p = 1;
var s = 2;
var user_point = 0;
var pc_point = 0;
var scoreboard = document.getElementById("score");
var result = document.getElementById("gramz");
function win(a, o){
	console.log("you won");
	switch(a){
		case "r": rock.classList.add("green_color");
					a = "rock";	
					result.innerHTML = "you choose " + a + " and pc choose " + o + " so yo won";
					setTimeout(function(){rock.classList.remove("green_color");}, 1500);
					break;
		case "p": paper.classList.add("green_color");
					a = "paper";
					result.innerHTML = "you choose " + a + " and pc choose " + o + " so yo won";
					setTimeout(function(){paper.classList.remove("green_color");}, 1500);
					break;
		case "s": scissor.classList.add("green_color");
					a = "scissor";
					result.innerHTML = "you choose " + a + " and pc choose " + o + " so yo won";
					setTimeout(function(){scissor.classList.remove("green_color");}, 1500);
					break;
}					
user_point += 1;
scoreboard.innerHTML = user_point + ":" + pc_point;
}

function lose(a, o){
	console.log("yo lose");
	switch(a){
		case "r": rock.classList.add("red_color");
					a = "rock";	
					result.innerHTML = "you choose " + a + " and pc choose " + o + " so yo loss";
					setTimeout(function(){rock.classList.remove("red_color");}, 1500);
					break;
		case "p": paper.classList.add("red_color");
					a = "paper";
					result.innerHTML = "you choose " + a + " and pc choose " + o + " so yo loss";
					setTimeout(function(){paper.classList.remove("red_color");}, 1500);
					break;
		case "s": scissor.classList.add("red_color");
					a = "scissor";
					result.innerHTML = "you choose " + a + " and pc choose " + o + " so yo loss";
					setTimeout(function(){scissor.classList.remove("red_color");}, 1500);
					break;
}
pc_point += 1;
scoreboard.innerHTML = user_point + ":" + pc_point;
}


function draw(a, o){
	console.log("it is a draw");
	switch(a){
		case "r": rock.classList.add("grey_color");
					a = "rock";	
					result.innerHTML = "you choose " + a + " and pc choose " + o + " so its draw";
					setTimeout(function(){rock.classList.remove("grey_color");}, 1500);
					break;
		case "p": paper.classList.add("grey_color");
					a = "paper";
					result.innerHTML = "you choose " + a + " and pc choose " + o + " so its draw";
					setTimeout(function(){paper.classList.remove("grey_color");}, 1500);
					break;
		case "s": scissor.classList.add("grey_color");
					a = "scissor";
					result.innerHTML = "you choose " + a + " and pc choose " + o + " so its draw";
					setTimeout(function(){scissor.classList.remove("grey_color");}, 1500);
					break;
}
}



function rocket(b){
	var o = Math.random() * 3;
	o = Math.floor(o);	
	switch(b){
		case "r": console.log("you clicked rock");
					if(o == 1){
						o = "paper"
						lose("r", o);}
						//console.log("you lose");	
					else
						if(o == 0){
							o = "rock"
							draw("r", o);}
							//console.log("it is a draw");
						else
							if(o == 2){
							o = "scissor"
							win("r", o);}
							//console.log("you won");
					break;
		case "p": console.log("you clicked paper");
					if(o == 1){
						o = "paper"
						lose("p", o);}
						//console.log("you lose");	
					else
						if(o==0){
							o = "rock"
							draw("p", o);}
							//console.log("it is a draw");
						else
							if(o == 2)
							{o = "scissor"
							win("p", o);}
							//console.log("you won");		
					break;
		case "s": console.log("you clicked scissor");
					if(o == 1){
						o = "paper"
						lose("s", o);}
						//console.log("you lose");	
					else
						if(o==0){
							o = "rock"
							draw("s", o);}
							//console.log("it is a draw");
						else
							if(o == 2)
							{
							o = "scissor"
							win("s", o);}
							//console.log("you won");
					break;			
	}
}

rock.addEventListener("click", function() {
	rocket("r");
})

paper.addEventListener("click",  function() {
	rocket("p");
})

scissor.addEventListener("click",  function() {
	rocket("s");
})