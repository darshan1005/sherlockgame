
        let timerInterval;
        var currentTime;
        var starthours;
        var startminutes;
        var startseconds;
        var endhours;
        var endminutes;
        var endseconds;
        let elapsedTime;
        let startTime;
        let timerElement = document.getElementById('timer');

        function startTimer() {
            currentTime = new Date();
            startTime = new Date().getTime();
            starthours = currentTime.getHours();
            startminutes = currentTime.getMinutes();
            startseconds = currentTime.getSeconds();

            timerInterval = setInterval(updateTimer, 100);
            console.log("Timer started")
        }

        function stopTimer() {
            clearInterval(timerInterval);
            currentTime = new Date();

            endhours = currentTime.getHours();
            endminutes = currentTime.getMinutes();
            endseconds = currentTime.getSeconds();
            elapsedTime = Math.abs(endseconds - startseconds) + Math.abs(startminutes - endminutes) * 60;
            console.log(elapsedTime)
            console.log("Timer started")

             if (elapsedTime <= 720){
                document.getElementById('Score').innerHTML = Math.floor(Math.random() * (100 - 91 + 1) + 91)
            }
            else if (elapsedTime >= 960 && elapsedTime < 1200){
                document.getElementById('Score').innerHTML = Math.floor(Math.random() * (90 - 79 + 1) + 79)
            }
            else if (elapsedTime >= 1200 && elapsedTime < 1440){
                document.getElementById('Score').innerHTML = Math.floor(Math.random() * (69 - 49 + 1) + 49)
            }
            else if (elapsedTime >= 1440 && elapsedTime < 1680){
                document.getElementById('Score').innerHTML = Math.floor(Math.random() * (59 - 39 + 1) + 39)
            }
            else if (elapsedTime >= 1680 && elapsedTime < 1800){
                document.getElementById('Score').innerHTML = Math.floor(Math.random() * (49 - 29 + 1) + 29)
            }
            else{
                document.getElementById('Score').innerHTML = Math.floor(Math.random() * (19 - 0 + 1) + 19)
            }
        }

        function updateTimer() {
            let timeElapsed = new Date().getTime() - startTime;
            let hours = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24);
            let minutes = Math.floor((timeElapsed / (1000 * 60)) % 60);
            let seconds = Math.floor((timeElapsed / 1000) % 60);
            let formattedTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
            timerElement.innerHTML = formattedTime;
            console.log(formattedTime)
        }
        function formatTime(time) {
            return time < 10 ? '0' + time : time;
            console.log("Updater count")
        }
        window.addEventListener('load', startTimer);
   
