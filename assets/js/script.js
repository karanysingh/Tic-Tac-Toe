var square = ['N','N','N','N','N','N','N','N','N'];
var player_no=2;
document.addEventListener('contextmenu', event => event.preventDefault());
var running =1;
$(".gamebtn").click(function() {
    var G = this.id;
    console.log(square);
    if(document.getElementById(G).textContent  != 'X' && document.getElementById(G).textContent  != 'O' && G!=10 && running == 1 && player_no !=20){
   
  status();
    if(player_no==1){
		player_no=2;
		}else{
			player_no=1;}
    input(G);
	winner();      }
    else if(G==10){
        hard_reset();
    }
    else{
        gamebutton_disabler();
    }
    
});
// THEME SWITCHER____________________________________
$("#space").click(function(){
    document.body.style.backgroundColor = '#000000';
    // btn.style.backgroundColor = "black";
    // btns
    for(var i=0; i<10; i++){
    document.getElementById(i+1).style.boxShadow = "0 0px 4px 0 white";
    document.getElementById(i+1).style.backgroundColor = "black";
    document.getElementById(i+1).style.borderColor = "black";
    document.getElementById(i+1).style.color = "white";
    document.getElementById("winr").style.color = "white";
    document.getElementById("winr").style.backgroundColor = "black";   
    document.getElementById("winrcolumn").style.backgroundColor = "black"; 
    document.getElementById("winrcontainer").style.backgroundColor = "black"; 
}

// document.getElementById("maincontainer").style.background = "url('/assets/img/energy.png'),url('/assets/img/orb.png') bottom";
document.getElementById("maincontainer").style.background = "url('http://clipart-library.com/images_k/space-png-transparent/space-png-transparent-12.png') bottom";
document.getElementById("maincontainer").style.backgroundRepeat = "repeat";
document.getElementById("maincontainer").style.backgroundSize = "cover";
document.getElementById("tictactoe").style.backgroundColor = "black";//backgroundcolor
document.getElementById("XO").style.color = "white";
document.getElementById("maincontainer-1").style.backgroundColor = "black";//backgroundcolor
document.getElementById("logoimage").src = "starts1.png";
document.getElementById("logoimage").style.width = "700px";

// document.getElementById("winrcontainer").style.opacity = "0.0";

});$("#default").click(function(){
    document.body.style.backgroundColor = 'green';
    // btn.style.backgroundColor = "black";
    // btns
    for(var i=0; i<10; i++){
    document.getElementById(i+1).style.boxShadow = "0 0px 4px 0 black";
    document.getElementById(i+1).style.backgroundColor = "rgb(255,255,0)";
    document.getElementById(i+1).style.borderColor = "black";
    document.getElementById(i+1).style.color = "black";
}

document.getElementById("tictactoe").style.backgroundColor = "white";//backgroundcolor
document.getElementById("XO").style.color = "black";
document.getElementById("maincontainer-1").style.backgroundColor = "white";//backgroundcolor
document.getElementById(10).style.backgroundColor = "#bf5b00";
document.getElementById("maincontainer").style.background = "none";
document.getElementById("maincontainer").style.backgroundColor = "white";//backgroundcolor
document.getElementById("winr").style.color = "black";
document.getElementById("winr").style.backgroundColor = "white";   
document.getElementById("winrcolumn").style.backgroundColor = "white"; 
document.getElementById("winrcontainer").style.backgroundColor = "white"; 
document.body.style.backgroundColor = 'white';


});
$("#classic").click(function(){
    document.body.style.backgroundColor = '#313437';
    // document.html.style.backgroundColor = '#313437';
    //btns
    for(var i=0; i<10; i++){
        document.getElementById(i+1).style.boxShadow = "0 0px 2px 0 #878905";
        document.getElementById(i+1).style.backgroundColor = "#5b2626";  
         document.getElementById(i+1).style.borderColor = "white";
        document.getElementById(i+1).style.color = "white";
    }
    // document.getElementById(i+1).style.border = "#ffffff";
    document.getElementById("tictactoe").style.backgroundColor = "#313437";//backgroundcolor
    document.getElementById("maincontainer").style.background = "none";
    document.getElementById("maincontainer").style.backgroundColor = "#313437";//backgroundcolor
    document.getElementById("XO").style.color = "white";//backgroundcolor
    document.getElementById("maincontainer-1").style.backgroundColor = "#313437";//backgroundcolor
    document.getElementById(10).style.color = "white";
    document.getElementById("winr").style.color = "white";
    document.getElementById("winr").style.backgroundColor = "#313437";   
    document.getElementById("winrcolumn").style.backgroundColor = "#313437"; 
    document.getElementById("winrcontainer").style.backgroundColor = "#313437"; 
});
//____________________________________________________
function hard_reset() {
    let i = 0;
    player_no=2;
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
    let i = 0;
    running = 0;
    document.getElementById("winrcontainer").style.zIndex = "2";
    document.getElementById("winrcontainer").style.opacity = "1.0";
    // var square = ['N','N','N','N','N','N','N','N','N'];
    button_glower(10);
    gamebutton_disabler();
    player_no = 20;
    for(i = 0; i < 9; i++) {
        document.getElementById(i+1).textContent = null;
    }
}
function input(G) {
    if(player_no==1){
    document.getElementById(G).textContent  = 'X';
        inv ='X';
    }else{
    document.getElementById(G).textContent  = 'O';
        inv = 'O'
        }
    modifier(G, inv);
	}
             

function ans( o, t, th){
    let r = 0;
	}
function status(){
	let i =0;
        for( i = 0;i<5;i++){
				if(i%2!=0){//1,3,5
					}
				else{//0,2,4
					ans(square[3*i/2],square[1+(3*i/2)],square[2+(3*i/2)]);//0,1,2
					//
					}
		}
}
function winner(){
	let i=0;
	for(i = 0;i<3;i++){//
		if(square[3*i] == square[3*i+1] && square[3*i+1] == square[3*i + 2] && square[3*i]!='N'){
				active = 0;
                            document.getElementById("winr").textContent = "Player " + player_no + " won !!";
                            reset();
                            document.getElementById("winr").setAttribute("z-index", "1");
						}else if(square[i]==square[i+3] && square[i+3]==square[i+6] && square[i]!='N'){
                                active = 0;
                                document.getElementById("winr").setAttribute("z-index", "1");
                                document.getElementById("winr").textContent = "Player " + player_no + " won !!";
                                reset();
			}else if(i==2){
					if(square[i]==square[i+2] && square[i+2]==square[i+4] && square[i]!='N'){
						var active = 0;
                        document.getElementById("winr").setAttribute("z-index", "1");
                        document.getElementById("winr").textContent = "Player " + player_no + " won !!";
                            reset();
						}
				}else if(i==0){
					if(square[i]==square[i+4] && square[i+8]==square[i+4] && square[i]!='N'){
							active = 0;
			
                        document.getElementById("winr").setAttribute("z-index", "1");
        
                                document.getElementById("winr").textContent = "Player " + player_no + " won !!";
                            reset();	
						}
					}
	}}

function modifier( G, inv){
		square[G-1] = inv;
		status();
		}
function gamebutton_disabler() {
    $(function(){
        $(".gamebtn").attr("disabled", true);
      });
}
function button_glower(btnId) {
    document.getElementById(btnId).style.boxShadow = "0 3px 50px 0 #878905"
}
