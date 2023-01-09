let button_start = document.getElementById('start');
let button_pause = document.getElementById('pause');
let button_reset= document.getElementById('reset');
let button_lap= document.getElementById('lap');
let p= document.getElementById('Laps');
let second = document.getElementById('second');
let  tens = document.getElementById('tens');
let interval;

button_start.onclick = () => {
	if(!interval)
		interval = setInterval(start, 100)
}
button_pause.onclick = () => {
	clearInterval(interval)
	interval = null

}
button_lap.onclick = () => {

		let t = parseInt(tens.innerHTML);
	let s =  parseInt(second.innerHTML);
	if(s<10)
		s = '0' + s
	if (t< 10)
		t= '0' + t
	p.innerHTML = p.innerHTML + '<br/>' + s+':'+t

}
button_reset.onclick = () => {
	clearInterval(interval)
	interval = null
	tens.innerHTML = '00';
	second.innerHTML = '00';
	p.innerHTML  = '';
}



start = () => {
	let t = parseInt(tens.innerHTML);
	let s =  parseInt(second.innerHTML);

	t = t+1
	if( t<= 9){
		tens.innerHTML = '0' + t
	}
	else {
		if (t > 99) {
			s = s+ 1
			t =0
			tens.innerHTML = '00'
		}
		else
			tens.innerHTML = t
	}
	
	if( s<= 9){
		second.innerHTML = '0' + s
	}
	else {
		second.innerHTML = s
	}


}
