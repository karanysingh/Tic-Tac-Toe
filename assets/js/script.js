var square = ['N','N','N','N','N','N','N','N','N'];
var player_no=2;
document.addEventListener('contextmenu', event => event.preventDefault());
var running =1;
var mode = 2;
var left_tiles_no = 9;
var level = 1;
var w = 3;
var left_tiles = [1,2,3,4,5,6,7,8,9];
var filled_tiles = [];
var winCount = 0;
var winCountPc = 0;
var playerOneName = "Computer";
var playerTwoName = "You";
$("#medium").click(makeItMedium);
$("#easy").click(makeItEasy);
$("document").ready(function(){
    fillScores();
    default_Activator();
    makeItMedium();
});
$("#scores").click(function(){
    changeNameButtons = document.getElementsByClassName("changeName");
    changeNameButtons[1].style.opacity = "1.0";
    changeNameButtons[1].style.zIndex = "12";
    changeNameButtons[2].style.opacity = "1.0";
    changeNameButtons[2].style.zIndex = "12";
    if(mode == 2){
    changeNameButtons[0].style.opacity = "1.0";
    changeNameButtons[0].style.zIndex = "12";}
});
$("#save").click(function(){
        changeNameButtons = document.getElementsByClassName("changeName");
        for(let i = 0;i <changeNameButtons.length;i++){
        changeNameButtons[i].style.opacity = "0.0";
        changeNameButtons[i].style.zIndex = "-1";
        }
        playerTwoName = $("#fetchName2").val();
        if(mode == 2){
            playerOneName = $("#fetchName").val();
        }
        fillScores();
    });
$(".gamebtn").click(function() {
    var G = this.id;
    // // // console.log(square);
    if (mode == 2) {
        if (document.getElementById(G).textContent  != 'X' && document.getElementById(G).textContent  != 'O' && G!=10 && running == 1 && player_no !=20 && mode==2){
            status();
            if(player_no == 1){
		        player_no = 2;
            } 
            else {
                player_no = 1;
            } 
            input(G);
            winner(square);  
            if (w == 1){
                declareWinner();
            }
            
        }
        else if (G == 10) {
            hard_reset();
        }
        else {
            gamebutton_disabler();
        }
    }
    else if (mode == 1) {
        if (document.getElementById(G).textContent  != 'X' && document.getElementById(G).textContent  != 'O' && G!=10 && running == 1 && player_no !=20 && mode==1){
            // console.log(left_tiles);
            w = 3;
            status();
            if (player_no == 1) {
                player_no = 2;
                filled_tiles.push(left_tiles.splice(left_tiles.indexOf(Number(G)), 1));
                input(G);     
                winner(square);             
                if (w == 1){
                    declareWinner();
                } 
                end_check();
                console.log("Player :" + player_no);
                if (player_no == 2){
                    player_no = 1;
                    // console.log(level);
                    let computer = playTurn();
                    if(left_tiles_no < 7 && level == 2){
                        computer = medium();
                    }
                    // console.log("COmputer gave: "+ computer);
                    // console.log("Player :" + player_no);
                    filled_tiles.push(left_tiles.splice(left_tiles.indexOf(Number(computer)), 1));
                    input(computer);
                    winner(square);    
                    if (w == 1){
                        declareWinner();
                    }
                }
            } 
        }
        else if (G == 10) {
            hard_reset();
        }
        else {
            gamebutton_disabler();
        }
    }
    // // console.log(left_tiles);
});

function input(G) {
    // console.log("Options left to try ->"+ left_tiles);
    // console.log("Commanded ->"+G);
    left_tiles_no--;
    // console.log(G);
    try{
    if(player_no==1){
    document.getElementById(G).textContent  = 'X';
        inv ='X';
    }else{
    document.getElementById(G).textContent  = 'O';
        inv = 'O'
        }
    modifier(G, inv);}
    catch(err){
        // console.log(err);
        document.getElementById(left_tiles[0]).textContent  = 'X';
    }
    }

function playTurn(){
    let rdm = random_Tile();
    // // console.log("choosen :----::>"+ rdm )
    return left_tiles[rdm];
}
function loading(){
    document.getElementById("loadHead").style.opacity = "1.0";
    document.getElementById("loadHead").style.zIndex = "6";
    document.getElementById("loadingRow").style.zIndex = "6";
}
function loadingVanish(){
    setTimeout(function(){
        document.getElementById("loadHead").style.opacity = "0.7";
         },500);
    setTimeout(function(){
    document.getElementById("loadHead").style.opacity = "0.5";
        },1000);
    setTimeout(function(){
        document.getElementById("loadHead").style.opacity = "0.2";
            },1500);
    setTimeout(function(){
        document.getElementById("loadHead").style.opacity = "0.0";
        document.getElementById("loadHead").style.zIndex = "-1";
        document.getElementById("loadingRow").style.zIndex = "-1";
    },2000);
}
function random_Tile(){
    return Math.floor(Math.random() * Math.floor(left_tiles_no));
}
    
//solo activator______________________________________
$("#11").click(solo_Activator);
// THEME SWITCHER_____________________________________
$("#space").click(space_Activator);
$("#default").click(default_Activator);
$("#classic").click(classic_Activator);
//____________________________________________________
function hard_reset() {
    let i = 0;
    left_tiles_no = 9;
    w = 3;
    left_tiles = [1,2,3,4,5,6,7,8,9];
    if (mode == 2 ){
    player_no = 2;
}
    else if (mode == 1 ){
        player_no = 1;
    }
    document.getElementById("winrcontainer").style.zIndex = "-2";
    running = 1;
    document.getElementById("winrcontainer").style.opacity = "0.0";
    square = ['N','N','N','N','N','N','N','N','N'];
    document.getElementById("winr").textContent = null;
    document.getElementById(10).style.boxShadow = "0 3px 2px 0 #878905";
    for(i = 0; i < 9; i++) {
        document.getElementById(i+1).textContent = null;
    }
}
function reset() {
    fillScores();
    let i = 0;
    running = 0;
    w = 3;
    document.getElementById("winrcontainer").style.zIndex = "2";
    document.getElementById("winrcontainer").style.opacity = "1.0";
    // var square = ['N','N','N','N','N','N','N','N','N'];
    button_glower(10);
    gamebutton_disabler();
    player_no = 20;
    // for(i = 0; i < 9; i++) {
    //     document.getElementById(i+1).textContent = null;
    // }
}         
function makeACopy(toClone){
    let temp = [];
    for(let i = 0; i < toClone.length; i++){
        temp.push(toClone[i]);
    }
    return temp;
}

function makeItMedium(){
    level = 2;
    document.getElementById("easy").style.backgroundColor = "#eef4f7";
    document.getElementById("medium").style.backgroundColor = "red";
}
function makeItEasy(){
    level = 1;
    document.getElementById("easy").style.backgroundColor = "red";
    document.getElementById("medium").style.backgroundColor = "#eef4f7";
}
function medium(){
    if(level == 2 && left_tiles_no < 7){
    let board = makeACopy(square);
    let filledBoard = makeACopy(filled_tiles);
    // console.log(board);
    // // console.log(filledBoard);
    for(let i = 0; i < left_tiles_no; i++){
        // console.log("Trying ->"+board[left_tiles[i]-1]);
        // console.log("Options ->"+left_tiles);
        // console.log("Trying tile no."+left_tiles[i]);
        board[left_tiles[i]-1] = 'O';
        if(winner(board)){
            // console.log("MyMove");
            return left_tiles[i];
        } 
        else {
            // console.log("Defensive!");
            board[left_tiles[i]-1] = 'X';
            if(winner(board)){
            return left_tiles[i];
            }
        }
    }
    // console.log("Using random move!");
    return playTurn();
}
}
function ans( o, t, th){
    let r = 0;
	}
function status(){
	let i = 0;
        for( i = 0; i < 5; i++){
				if(i%2 != 0){//1,3,5
					}
				else{//0,2,4
					ans(square[3*i/2], square[1+(3*i/2)], square[2+(3*i/2)]);//0,1,2
					//
					}
		}
}
function declareWinner(){
    if (mode == 2){
        if(player_no == 1){
            winCountPc++;
            document.getElementById("winr").textContent = playerOneName +" won !!";
            document.getElementById("winr").setAttribute("z-index", "1");
            reset(); 
        }else if (player_no == 2){
            winCount++;
            document.getElementById("winr").textContent = playerTwoName +" won !!";
            document.getElementById("winr").setAttribute("z-index", "1");
            reset();
        }
    }
    else if(mode == 1){
        if(player_no == 1){
            winCountPc++;
            document.getElementById("winr").textContent = playerOneName +" won !!";
            document.getElementById("winr").setAttribute("z-index", "1");
            reset(); 
        }else if (player_no == 2){
            winCount++;
            document.getElementById("winr").textContent = playerTwoName +" won !!";
            document.getElementById("winr").setAttribute("z-index", "1");
            reset();
        }
    }
    end_check();
}
function winner(board){//makes w = 1 if anyone wins or match is drawn.
    let i = 0;
    w = 0;
	for(i = 0; i < 3; i++) {//
		            if(board[3*i] == board[3*i+1] && board[3*i+1] == board[3*i + 2] && board[3*i]!='N'){
                            active = 0;
                            w = 1;

					}else if(board[i]==board[i+3] && board[i+3]==board[i+6] && board[i]!='N'){
                                active = 0;
                                w = 1;
			}else if(i==2){
					if(board[i]==board[i+2] && board[i+2]==board[i+4] && board[i]!='N'){
						var active = 0;
                        w = 1;
						}
				}else if(i==0){
					if(board[i] == board[i+4] && board[i+8]==board[i+4] && board[i]!='N'){
							active = 0;
                            w = 1;	
						}
					}
    }
    return w;
}

function modifier( G, inv){
		square[G-1] = inv;
		status();
        }

function end_check(){
    if(left_tiles_no == 0 && document.getElementById("winr").textContent != "Player " + player_no + " won !!") {
        document.getElementById("winr").setAttribute("z-index", "1");
        document.getElementById("winr").textContent = "Draw!";
        reset();
    }
    // else if(document.getElementById("winr").textContent == "Player " + player_no + " won !!" && left_tiles_no != 0){
    //     if(player_no == 2){
    //         document.getElementById("winr").textContent = "You won !!";
    //     }
    //     else if(player_no == 1){
    //         document.getElementById("winr").textContent = "Computer won !!";
    //     }
    // }
}
    
function gamebutton_disabler() {
        // $("input.gamebtn").attr("disabled", true);    

}
//Solo Activator__________________________
function solo_Activator(){
    if(mode == 2){
        mode = 1;
        playerOneName = "Computer";
        playerTwoName = "You";
        winCount = 0;
        winCountPc = 0;
        document.getElementById("11").textContent = "2 Player";
        button_glower(11);
        hard_reset();
        document.getElementById("menu").style.marginLeft = "0px";
        document.getElementById("easy").style.opacity = "1.0";
        document.getElementById("medium").style.opacity = "1.0";
        player_no = 1;
        fillScores();
    }
    else if(mode == 1){
        document.getElementById("")
        mode = 2;
        playerOneName = "Player 1";
        winCount = 0;
        winCountPc = 0;
        playerTwoName = "Player 2";
        document.getElementById("11").textContent = "Play Solo";    
        document.getElementById("11").style.boxShadow = "0 3px 2px 0 black";
        hard_reset();
        player_no = 2;
        document.getElementById("menu").style.marginLeft = "73px";
        document.getElementById("easy").style.opacity = "0.0";
        document.getElementById("medium").style.opacity = "0.0";
        fillScores();
    }
}
//Space Theme Activator___________________
function space_Activator() {
    document.body.style.backgroundColor = "#130831";
    document.getElementById("maincontainer").style.backgroundColor = "#130831";
    setTimeout(function(){
        document.getElementById("maincontainer").style.background = "url('http://clipart-library.com/images_k/space-png-transparent/space-png-transparent-12.png') bottom";
    }, 2000);
    //space cartoon colour --> #130831
        document.body.style.backgroundColor = '#130831';
        // btn.style.backgroundColor = "black";
        // btns
        for(var i = 0; i < 10; i++){
        document.getElementById(i+1).style.boxShadow = "0 0px 4px 0 white";
        document.getElementById(i+1).style.backgroundColor = "#130831";
        document.getElementById(i+1).style.borderColor = "black";
        document.getElementById(i+1).style.color = "white";
        document.getElementById("winr").style.color = "white";
        document.getElementById("winr").style.backgroundColor = "#130831";   
        document.getElementById("winrcolumn").style.backgroundColor = "#130831"; 
        document.getElementById("winrcontainer").style.backgroundColor = "#ffffff00"; 
    }
    
    document.getElementById("counter").style.color = "white";
    document.getElementById("maincontainer").style.backgroundRepeat = "repeat";
    document.getElementById("maincontainer").style.backgroundSize = "cover";
    document.getElementById("tictactoe").style.backgroundColor = "#ffffff00";//backgroundcolor
        document.getElementById("tictactoe").style.backgroundColor = "none";//backgroundcolor
    document.getElementById("XO").style.color = "white";
    document.getElementById("XO").style.backgroundColor = "#ffffff00";
    

    document.getElementById("maincontainer-1").style.backgroundColor = "#130831";//backgroundcolor
    // document.getElementById("logoimage").src = "starts1.png";
    // document.getElementById("logoimage").style.width = "700px";
    // document.getElementById("XO").style.borderBottom = "2px solid black";
    document.getElementById("XO").style.borderRadius = "3%";
    // document.getElementById("XO").style.fontFamily = "Ionicons";
    document.getElementById("XO").style.boxShadow = "0px 8px 20px 0px white";
    document.getElementById("XO").style.animationName = "shadow";
    // document.getElementById("winrcontainer").style.opacity = "0.0";
    var lines = document.getElementsByClassName("endline");
    $("body").ready(function(){
        document.getElementById("loadHead").style.background = 'url("https://webstockreview.net/images/astronaut-clipart-animation-15.gif") no-repeat right';
        loading();
        setTimeout(loadingVanish, 500);
    })
    for(var i=0;i<lines.length; i++){
        lines[i].style.opacity = "0";
    }

    }

//Default Theme Function___________________
function default_Activator(){
    // document.body.style.backgroundColor = 'green';
    // btn.style.backgroundColor = "black";
    // btns
    for(var i = 0; i < 10; i++){
    document.getElementById(i+1).style.boxShadow = "0 0px 4px 0 black";
    document.getElementById(i+1).style.backgroundColor = "rgb(255,255,0)";
    document.getElementById(i+1).style.borderColor = "black";
    document.getElementById(i+1).style.color = "black";

}
document.getElementById("counter").style.color = "red";
document.getElementById("loadHead").style.background = 'url("https://4.bp.blogspot.com/-agQQaBYzhY8/VruDQM4tJMI/AAAAAAAACvw/mm2Ov49ChGI/s1600/minion-02.gif") no-repeat center';
loading();
setTimeout(loadingVanish, 1500);
document.getElementById("XO").style.boxShadow = "none";
document.getElementById("tictactoe").style.backgroundColor = "white";//backgroundcolor
document.getElementById("XO").style.color = "black";
document.getElementById("maincontainer-1").style.backgroundColor = "white";//backgroundcolor
document.getElementById(10).style.backgroundColor = "#bf5b00";
document.getElementById("maincontainer").style.background = "none";
document.getElementById("maincontainer").style.backgroundColor = "white";//backgroundcolor
document.getElementById("winr").style.color = "black";
document.getElementById("winr").style.backgroundColor = "white";   
document.getElementById("winrcolumn").style.backgroundColor = "white"; 
document.getElementById("winrcontainer").style.backgroundColor = "#ffffff00"; 
document.body.style.backgroundColor = 'white';

var lines = document.getElementsByClassName("endline");

for(var i=0;i<lines.length; i++){
    lines[i].style.opacity = "1";
}


}
//Classic Theme Function___________________
function classic_Activator(){
    document.body.style.backgroundColor = '#313437';
    // document.html.style.backgroundColor = '#313437';
    //btns
    for(var i = 0; i < 10; i++){
        document.getElementById(i+1).style.boxShadow = "0 0px 2px 0 #878905";
        document.getElementById(i+1).style.backgroundColor = "#5b2626";  
        document.getElementById(i+1).style.borderColor = "white";
        document.getElementById(i+1).style.color = "white";
    }
    // document.getElementById(i+1).style.border = "#ffffff";
    document.getElementById("XO").style.animationName = "shad";
    document.getElementById("XO").style.border = "none";
    document.getElementById("XO").style.boxShadow = "none";
    document.getElementById("counter").style.color = "white";

    document.getElementById("tictactoe").style.backgroundColor = "#313437";//backgroundcolor
    document.getElementById("maincontainer").style.background = "none";
    document.getElementById("maincontainer").style.backgroundColor = "#313437";//backgroundcolor
    document.getElementById("XO").style.color = "white";//backgroundcolor
    document.getElementById("maincontainer-1").style.backgroundColor = "#313437";//backgroundcolor
    document.getElementById(10).style.color = "white";
    document.getElementById("winr").style.color = "white";
    document.getElementById("winr").style.backgroundColor = "#313437";   
    document.getElementById("winrcolumn").style.backgroundColor = "#313437"; 
    document.getElementById("winrcontainer").style.backgroundColor = "#ffffff00"; 
    var lines = document.getElementsByClassName("endline");

    for(var i=0;i<lines.length; i++){
        lines[i].style.opacity = "0.5";
    }
    document.getElementById("loadHead").style.background = 'url("https://thumbs.gfycat.com/EcstaticTerribleAnophelesmosquito-small.gif") no-repeat center';
    document.getElementById("loadHead").style.backgroundSize = "contain";
    loading();
    setTimeout(loadingVanish, 1500);
}
function fillScores(){
    document.getElementById("counter").textContent = playerOneName +":  "+winCountPc + "  "+playerTwoName +": "+winCount;
}
//Button glower___________________
function button_glower(btnId) {
    document.getElementById(btnId).style.boxShadow = "0 3px 50px 0 #878905"
}
//________________________________