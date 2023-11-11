var end = new Date('11/10/2023 12:00 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            var divContain = document.querySelector('div.container');
            divContain.style.justifyContent = 'center';
            divContain.innerHTML = '<div id="temp"><a href="./public/FlyingRocket.html" class="button"><svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>Click to Launch</a></div>';
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days + ' : ' + hours + " : " + minutes + " : " + seconds;
    }

    timer = setInterval(showRemaining, 1000);