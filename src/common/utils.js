import { debug } from "util";

export let game_data = () => {
	return fetch('./assets/data/game_data.json')
		.then(response => response.json())
		.catch((err)=> { console.log(err) })
};

export let msToHMS = ( ms ) => {
	debugger;
	ms = Number.parseInt(ms);
    // 1- Convert to seconds:
    let seconds = ms / 1000;
    // 2- Extract hours:
    let hours = parseInt( seconds / 3600 ); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    let minutes = parseInt( seconds / 60 ); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
	//alert( hours+":"+minutes+":"+seconds);
	return ( hours+":"+minutes+":"+seconds);
}
// export let filter_sport = (data) => {
// 	// insert code
// }

// export let filter_challenges = (data) => {
// 	// insert code
// }
