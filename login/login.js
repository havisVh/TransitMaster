const form = document.getElementsByClassName('form')[0];

var i1 = form.children[0].children[1]
var i2 = form.children[1].children[1]

var url ="https://ats527encrypt.b4a.app/encodenow/"
async function userPost(e,p) {
//     data = {
//         email: e,
//         password: p
//     }
//    response = await fetch(url, {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
      
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify(data),
//   });
    
    response = await fetch(url + e)
    joji =  await response.text()
    alert(joji);
    return joji;
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
