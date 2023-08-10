// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, ref, get, push, onValue } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK9_ERohm0SPjdit7CwKouIPBbFHlBZyQ",
  authDomain: "chat-4fa88.firebaseapp.com",
  databaseURL: "https://chat-4fa88-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-4fa88",
  storageBucket: "chat-4fa88.appspot.com",
  messagingSenderId: "186252157766",
  appId: "1:186252157766:web:9e219533d18c4acee27b47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

//投稿
function post() {
    var text = document.getElementById("text");
    var date = new Date();

    push(ref(db, "chat"), {
        text : text.value,
        date : date.toLocaleString()
    })
}

window.post = post;
export{post}

//取得・表示
var chat = document.getElementById("chat");

onValue(ref(db, "chat"), function(snapshot) {
    var chatList = snapshot.val();

    chat.innerHTML = "";
    Object.keys(chatList).forEach(key => {
        chat.innerHTML += '<div class="text-secondary small">'+chatList[key].date+'</div><div>'+chatList[key].text+'</div><hr>';
    });
});