import database from 'firebase'

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCzs9OFMyRHIx0FP-pruskH3_GWUiYCJAA",
    authDomain: "school-atendence-app-3bbcb.firebaseapp.com",
    projectId: "school-atendence-app-3bbcb",
    storageBucket: "school-atendence-app-3bbcb.appspot.com",
    messagingSenderId: "951693044104",
    appId: "1:951693044104:web:129692cabbb65f6727323d",
    measurementId: "G-61L9LQ19HD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

export default firbase.database;