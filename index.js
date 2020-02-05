simply.on('singleClick', function(e) {
  simply.subtitle('Pressed ' + e.button + '!');
  if (e.button === 'up') {
    navigator.geolocation.getCurrentPosition(function(pos) {
      var coords = pos.coords;
      var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=243d56456673442f6e9ca2467363b70c&lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
      ajax({ url: weatherUrl, type: 'json' }, function(data) {
        var body = 
            "Name:" + data.name + "\n" +
            "Description: " + data.weather[0].description +  "\n" +
            "Temperature: " + data.main.temp + "(" + data.main.temp_min + " ~ " + data.main.temp_max + ")" + "\n" +
            "Humidity: " + data.main.humidity;
        Pebble.showSimpleNotificationOnPebble('Open Weather', body);
      });
    });
  }
});

simply.on('longClick', function(e) {
  simply.vibe();
  simply.subtitle('You held the ' + e.button + ' button!');
});

simply.setText({
  title: 'Simply Demo!',
  body: 'This is a demo. Press buttons or tap the watch!',
}, true);
