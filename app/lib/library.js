import { shout } from "./library/shout";
import { ssshh } from "./library/ssshh";

function init(){
	var msg = 'foo BAR baZ';
	console.log(shout(msg), 'shouted');
	console.log(ssshh(msg), 'ssshhed');
}

export { shout, ssshh, init };