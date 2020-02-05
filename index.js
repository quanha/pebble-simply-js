simply.on('singleClick', function(e) {
  simply.subtitle('Pressed ' + e.button + '!');
  if (e.button === 'up') {
    navigator.geolocation.getCurrentPosition(function(pos) {
      var coords = pos.coords;
      var weatherUrl = 'https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22&lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
      ajax({ url: weatherUrl, type: 'json' }, function(data) {
        simply.text({ title: coords.latitude, subtitle: coords.longitude });
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
