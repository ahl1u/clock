window.onload = function() {
    function time(){
        var current_date = new Date();
        var current_hour = current_date.getHours();
        var current_minute = current_date.getMinutes();
        var current_second = current_date.getSeconds();
        
        var am_pm = current_hour >= 12 ? 'PM' : 'AM';

        current_hour = current_hour % 12;
        current_hour = current_hour ? current_hour : 12;


        if(current_minute < 10){
            current_minute = "0" + current_minute
        }
        if(current_second < 10){
            current_second = "0" + current_second
        }

        return current_hour + ':' + current_minute + ':' + current_second + ' ' + am_pm
    }

    function update(){
        var clock = document.getElementById('clock');
        clock.innerText = time();
    }

    update();

    setInterval(update, 1000);

}
