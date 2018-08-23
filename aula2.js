// DATE --------------------------------------------------------------------------------------------

var hoje = new Date();

console.log(hoje);
console.log('Tempo em milisegundos:' + hoje.getTime());


// -------------------------------------------------------------------------------------------------

var natal = new Date(1419465600000); //Natal de 2014
console.log(natal);

// String REC 2822
var natal2016 = new Date('2016/12/25');
console.log(natal2016);

// String 
var exemplo = new Date('12/25/2016');
console.log(exemplo);

var date2 = new Date('2016-12-25T10:30:00');
console.log(date2);


var data = new Date(2016, 11, 25);
console.log(data);


var data = new Date(2016, 06, 3, 10,30, 0);
console.log(data);


// ------------------------------------------------------------------------------------------------
var data = new Date('2016-12-25');
console.log(data);


date.ToString();
data.split('T').reverse.join('/');
console.log(data);


console.log()

// FUNCTIONS --------------------------------------------------------------------------------------

//Function declaration
function divisao(a, b){
	return a/b;
}
console.log(divisao(5,2));


//function expression
var divisao = function(a,b){
	return a / b;
}
console.log(divisao(10,5));


// Invocando uma função
// Function declaration - A funcao e carregada antes do codigo ser interpretado;
// Function expression - A funcçao é carregada durante a interpretaçao dos codigos;



// HTML5 APIS--------------------------------------------------------------------------------------

// Geolocation

navigator.geolocation.getCurrentPosition(function(position){
	console.log(position.coords.latitude, position.coords.longitude);
});

var watchID = navigator.geolocation.watchPosition(function (position) {
	do_something(position.coords.latitude, postion.coords.longitude);
});


// HTML5 APIS--------------------------------------------------------------------------------------
connection.onopen = function(){
	connection.send('Ping');
};

connection.onnerror = function(error){
	console.log('WebSocket Error'+ error);
};

connection.onmessage = function(e){
	console.log('Server:' + e.data);
};

// WEB SOCKETS-----------------------------------------------------------------------------------

connection.send('your message');

// LOCAL STORAGE--------------------------------------------------------------------------------

//store
localStorage.lastname = 'Smith';

//Retrieve
document.getElementById("Result").innerHTML = localStorage.lastname;


// EXERCICIOS--------------------------------------------------------------------------------





