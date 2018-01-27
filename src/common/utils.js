import { debug } from "util";

export let game_data = () => {
	return fetch('./assets/data/game_data.json')
		.then(response => response.json())
		.catch((err)=> { console.log(err) })
};

export let secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));
    hours = hours.toString().padStart(2, 0);
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    minutes = minutes.toString().padStart(2, 0);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    seconds = seconds.toString().padStart(2, 0);
    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
};
// export let filter_sport = (data) => {
// 	// insert code
// }

// export let filter_challenges = (data) => {
// 	// insert code
// }
