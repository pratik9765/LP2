window.onload = loadUsers
var firebaseConfig = {
   apiKey: "AIzaSyC8_0qWhQggobxT5r-v9glqt6HYRupjvxc",
  authDomain: "user-3e41c.firebaseapp.com",
  databaseURL: "https://user-3e41c-default-rtdb.firebaseio.com",
  projectId: "user-3e41c",
  storageBucket: "user-3e41c.appspot.com",
  messagingSenderId: "851212877045",
  appId: "1:851212877045:web:150f939fde536e7a7619bc"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()
let userData = [];
async function loadUsers (){
await firebase.database().ref('users').once('value',   function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      const email = childData.email;
      const name = childData.full_name;
      const phoneno = childData.phoneno;
      const data = {
        name:name,email:email,phoneno:phoneno
      }
      userData.push(data)
    });
  });
  let html ="<tr><th>First Name</th><th>Last Name</th><th>Points</th></tr>"
  userData.forEach((user, index) => {
    var count = index+1;
    html+="<tr><td>"+count+"</td><td>"+user.name+"</td><td>"+user.email+"</td><td>"+user.phoneno+"</td></tr>";
  });
  console.log(html);
  let element = document.querySelector('.user_table');
  element.innerHTML = html
}

function logOut(){
  window.location.href = 'index.html'
}