/*jslint browser: true*/
/*global $, jQuery*/

var p1score;
var p2score;
var currentPlayer;
var currentSum;
var nameArray = [];

$(document).ready(function () {
    $(".gamearea").hide();
    $(".CurrentScore").hide();
    $(".PlayerMove").hide();
    $(".choice").hide();
    $("#button").click(gameStart);
});

function gameStart() {
    $(".NewGame").click(function(event){
        event.preventDefault()
    });
    $("#NewGame").click(setupUsers());
    $("#button").click(turnSetup());
}

function setupUsers() {
    //populate names - 2D array(global)
    var p1name = $('#Player1').val(); //from form
    var p2name = $('#Player2').val(); //from form
    p1score = 0;
    p2score = 0;
    currentPlayer = 1;
    nameArray = [[p1name, p1score], [p2name, p2score]];
    $("#player1name").empty();
    $("#player1name").append(p1name);
    $("#player1name").append(": ");
    $("#player1name").append(p1score);
    $("#player1name").append(" points");
    $("#player2name").empty();
    $("#player2name").append(p2name);
    $("#player2name").append(": ");
    $("#player2name").append(p2score);
    $("#player2name").append(" points");
    var i = 1;
    if (i == 1) {
        $(".PlayerMove h2").empty();
        $(".PlayerMove h2").append(p1name);
        $(".PlayerMove h2").append("'s turn!");
        i++;
    } else {
        $(".PlayerMove h2").empty();
        $(".PlayerMove h2").append(p2name);
        $(".PlayerMove h2").append("'s turn!");
        i--;
    }
    $(".gamearea").show();
    $(".CurrentScore").show();
    $(".PlayerMove").show();
    $(".choice").show();
}

function turnSetup() {
    $.post("http://ins.mtroyal.ca/~nkhemka/test/process.php").done(function (data){ 
    var deck = $.parseJSON(data)
    }); 
    
    //var beat = deck.();
    
    //for(var i = 1; i < deck.Cards.length; i++){
            
    //}
    
    //value to beat
    //Loop for(var i = 1; i < y.Cards.length; i++){
	//Create the html for the card
	//Append the created html to the playArea
    //show play area
    //call resetListeners();
}

function resetListeners() {
    
}

function fixCard() {

}

function calculateCurrentScore() {
    
}

function endGame() {
    
}