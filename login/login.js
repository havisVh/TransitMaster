const form = document.getElementsByClassName('form')[0];

var i1 = form.children[0].children[1]
var i2 = form.children[1].children[1]
    Parse.initialize("L6vwaXcFwbmyYcImWj1ctCCebvMfqZwgxM1n5IOm","HYJzxyHpctZC2C9ZR5gVQhcn54nQsuhyAY7PGCxv"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/'

var url ="https://transitmaster.b4a.app/signin_with_email"
async function userPost(e,p) {

    data = {
        email: e,
        password: p
    }   
    var a = await Parse.Cloud.run("signInWithEmail", data)
    localStorage.setItem('user', JSON.stringify(a))
    location.href = "/"
}




function validate_login() {
    var email = i1.value;
    var password = i2.value;
    



    userPost(email, password)
    // .then((data) => {
    //     if (data == "true") {
            
    //         // window.location.href = "https://ats527.b4a.app/"
    //     } else {
    //         alert("Wrong email or password")
    //     }
    // })

    
}
