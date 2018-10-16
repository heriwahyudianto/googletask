const input = document.getElementById('math');
function ce(){
	input.value="";
}
function nol(){
	if(input.value.length>0){		
		input.value=input.value + '0';
	}
}
function nolnol(){
	if(input.value.length>0){		
		input.value=input.value + '00';
	}
}
function nolnolnol(){
	if(input.value.length>0){		
		input.value=input.value + '000';
	}
}
function satu(){
	input.value=input.value + '1';
}
function dua(){
	input.value=input.value + '2';
}
function tiga(){
	input.value=input.value + '3';
}
function empat(){
	input.value=input.value + '4';
}
function lima(){
	input.value=input.value + '5';
}
function enam(){
	input.value=input.value + '6';
}
function tuju(){
	input.value=input.value + '7';
}
function delapan(){
	input.value=input.value + '8';
}
function sembilan(){
	input.value=input.value + '9';
}
function bagi(){
	if(input.value.length>0){
		input.value=input.value + '/';
	}
}
function kali(){
	if(input.value.length>0){
		input.value=input.value + '*';
	}
}
function plus(){
	if(input.value.length>0){
		input.value=input.value + '+';
	}
}
function min(){
	if(input.value.length>0){
		input.value=input.value + '-';
	}
}
function samadengan(){
	input.value=eval(input.value);
}
