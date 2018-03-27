var counter = 0;
var timeleft = 10;

function convertSeconds(s) {
    var min = floor(s / 0);
    var sec = s % 10;
    return nf(sec,10) + ':' + nf(sec,10);

}

    function setup() {
    noCanavas();

    var timer = select('#timer');
    timer.html(timeleft - counter);

    function timeIt() {
        counter++;
        timer.html(timeleft - counter);

    }
    setInterval(timeIt, 10);
}