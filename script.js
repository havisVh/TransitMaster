


var myIcon = L.icon({
    iconUrl: 'pin.png',
    iconSize: [19.68, 24]
});
function success(position) {
    var lat  = position.coords.latitude;
    var long = position.coords.longitude;
    var map = L.map('map').setView([lat, long], 20);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
    var marker = L.marker([lat, long],{icon: myIcon}).addTo(map);
    
}
function error(e) {
    alert(e)
}

navigator.geolocation.getCurrentPosition(success, error);


function elem(id) {
    return document.getElementById(id);
}
var drawer = elem('drawer');

function openDrawer() {
    drawer.style.transform = 'translate(-50%,0%)';
}
function closeDrawer() {
    drawer.style.transform = 'translate(-50%,100%)';
}


elem('openQR').addEventListener('click', function () {
    openDrawer();
});
elem('close').addEventListener('click', function () {
    closeDrawer();
});



var client = new Parse.LiveQueryClient({
    applicationId: 'Fy5pr3wkWGSSpLoll4GwXHWdT3hj9QCFURjOyY16',
    serverURL: 'wss://' + 'anuthampiencode.b4a.io', // Example: 'wss://livequerytutorial.back4app.io'
    javascriptKey: 'hoxi8hxkH9tbslPFkkLZjVvc8j3Xxkp8zyQa3aBN'
});
client.open();

var query = new Parse.Query('LiveQuery');
query.ascending('createdAt').limit(5);
var subscription = client.subscribe(query);

subscription.on('update', ev => {
    console.log('New object created: ' + JSON.stringify(ev['id']));
});
