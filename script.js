    Parse.initialize("L6vwaXcFwbmyYcImWj1ctCCebvMfqZwgxM1n5IOm","HYJzxyHpctZC2C9ZR5gVQhcn54nQsuhyAY7PGCxv"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/'


onload = function () {
    obj = JSON.parse(localStorage.getItem('user'))
    if (obj) {
        elem('user').innerHTML ="Welcome , " +  obj['username']
        elem('qr').src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + obj['obj_id']
    } else {
        this.location.href = "/welcome/"
    }
}


var myIcon = L.icon({
    iconUrl: 'pin.png',
    iconSize: [19.68, 24]
});

var bus = L.icon({
    iconUrl: 'bus.png',
    iconSize: [12,12]
    
})
function success(position) {
    var lat  = position.coords.latitude;
    var long = position.coords.longitude;
    var map = L.map('map').setView([lat, long], 20);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
    var marker = L.marker([lat, long], { icon: myIcon }).addTo(map);
     bus = L.marker([8.48808090486513,
    76.95197314352423], { icon: bus }).addTo(map);
   
    
}
function setMarker(loc) {
     bus.setLatLng(L.latLng(loc['x'], loc['y']))
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
    applicationId: 'L6vwaXcFwbmyYcImWj1ctCCebvMfqZwgxM1n5IOm',
    serverURL: 'wss://' + 'transitmaster.b4a.io', 
    javascriptKey: 'HYJzxyHpctZC2C9ZR5gVQhcn54nQsuhyAY7PGCxv'
});
client.open();

var query = new Parse.Query('busData');
query.ascending('createdAt').limit(5);
var subscription = client.subscribe(query);

subscription.on('update',async ev => {

    key = await Parse.Cloud.run("updateBus")
      const query = new Parse.Query('busData');
  
  query.equalTo('objectId', 'HhpDU0JE6R');
    try {
        const results = await query.find();
        for (const object of results) {
            // Access the Parse Object attributes using the .GET method
            const loc = object.get('loc')
            setMarker(loc)
        }
    } catch (e) {
    console.error('Error while fetching ParseObject', e);
      }
});



