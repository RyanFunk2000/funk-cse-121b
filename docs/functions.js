// functions.js
// Define attributes for all inputs/outputs
let inputs = {
    firstSession:
    {
        time: "",
        rings: 0,
        speed: 0,
        enemy: 0,
        tricks: 0,
        total: 0,
    },
    secondSession: 
    {
        time: "",
        rings: 0,
        speed: 0,
        enemy: 0,
        tricks: 0,
        total: 0,
    },
};



function Director() {
    // Get and convert inputs from first play session.
    getInput(inputs.firstSession, "1");
    const session1_time = convertTime(inputs.firstSession.time);
    const session1_bonus = findTimeBonus(inputs.firstSession);

    // Get and convert inputs from second play session.
    getInput(inputs.secondSession, "2");
    const session2_time = convertTime(inputs.secondSession.time);
    const session2_bonus = findTimeBonus(inputs.secondSession);

    // Calculate properties of given level's time bonus using both game sessions.
    const score_rate = calculateScoreRate(session1_time,session1_bonus,session2_time,session2_bonus)
    const max_time_bonus = calculateStartPoints(session1_time,session1_bonus,score_rate)
    const time_limit = calculateTimeLimit(score_rate,max_time_bonus)

    const outputs = {
        scoreRate: score_rate,
        maxTimeBonus: max_time_bonus,
        timeLimit: time_limit,
    };
    return outputs
}

function getInput(session, sessionNum) {
    // Update play session with inputs
    session.time = document.querySelector("#time"+sessionNum).value;
    session.rings = parseInt(document.querySelector("#rings"+sessionNum).value);
    session.speed = parseInt(document.querySelector("#speed"+sessionNum).value);
    session.enemy = parseInt(document.querySelector("#enemy"+sessionNum).value);
    session.tricks = parseInt(document.querySelector("#tricks"+sessionNum).value);
    session.total = parseInt(document.querySelector("#total"+sessionNum).value);
}

function convertTime(time) {
    // Split minutes, seconds, and milliseconds from time into seperate integer variables.
    const split_time = time.split(':');
    const m = parseInt(split_time[0]);
    const s = parseInt(split_time[1]);
    const ms = parseInt(split_time[2]);

    // Convert and return final time as seconds.
    return (m * 60) + s + (ms * .01)
}

function findTimeBonus(session) {
    return session.total - (session.rings + session.speed + session.enemy + session.tricks)
}

function calculateScoreRate(time1, bonus1, time2, bonus2) {
    // Find the difference for time and guarantee it remains positive.
    let timeDiff =  Math.abs(time1 - time2);
    // Find the difference for time bonus score and guarantee it remains positive.
    let scoreDiff =  Math.abs(bonus1 - bonus2);

    // Divide the time and score differences and return as a rounded integer.
    return Math.round(scoreDiff/timeDiff)
}

function calculateStartPoints(time, bonus, score_rate) {
    // Find the amount of points lost due to time.
    const points_lost = time * score_rate;
    // Sum time bonus that was lost and remaining time bonus received.
    const maximum = points_lost + bonus;

    // Round maximum time bonus up to nearest 10.
    return parseInt(Math.round(maximum/10) * 10)
}

function calculateTimeLimit(score_rate, max_time_bonus) {
    // Find the time limit and round to the nearest millisecond.
    const time = Math.round((max_time_bonus/score_rate * 100)/100);
    // Split time_limit from seconds to seperate variables for milliseconds, seconds, and minutes.
    const m = Math.floor(time/60);
    const s = Math.floor(time - m * 60);
    const ms = (time - Math.floor(time)) * 100;
    // Format seperate time variables into standard time format.
    const time_standard = `${m}:${s}:${ms}`;

    // Return time limit formatted in both seconds and standard time format as array.
    return [time_standard, time]
}

export default Director;