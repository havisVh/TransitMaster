

    Parse.initialize("L6vwaXcFwbmyYcImWj1ctCCebvMfqZwgxM1n5IOm","HYJzxyHpctZC2C9ZR5gVQhcn54nQsuhyAY7PGCxv"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/'



async function update(loc,index) {
    
  const query = new Parse.Query('busData');
  try {
    // here you put the objectId that you want to update
    const object = await query.get('HhpDU0JE6R');
      object.set('loc', loc);
    object.set('index', index);
    try {
      const response = await object.save();
        jj = {
            loc: response.get('loc'),
            index: response.get('index')
        }

        document.getElementById('status').innerHTML = JSON.stringify(jj)
        
    } catch (error) {
      console.error('Error while updating busData', error);
      }
    } catch (error) {
      console.error('Error while retrieving object busData', error);
    }

}
setInterval(async function () { 
    key = await Parse.Cloud.run("updateBus")
      const query = new Parse.Query('busData');
  
  query.equalTo('objectId', 'HhpDU0JE6R');
    try {
        const results = await query.find();
        for (const object of results) {
            // Access the Parse Object attributes using the .GET method
            const loc = object.get('loc')
            const route = object.get('route')
            var index = object.get('index')   
            const data = {
        "x" : route[index][0],
        "y" : route[index][1],
        "location" : route[index][2]
            }
            index = index + 1
            await update(data,index)
        }
    } catch (e) {
    console.error('Error while fetching ParseObject', e);
      }
},180000 );
