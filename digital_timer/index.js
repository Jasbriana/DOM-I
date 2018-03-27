var counter = 0;
var timeleft = 60;

function setup() {
    noCanavas();

    var timer = select('#timer');
    timer.html(timeleft - counter);

    function timeIt() {

    }
    setInterval(timeIt, 1000)
}