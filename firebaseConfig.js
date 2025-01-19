<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCBGDm_JUpY-BxoZDwneus8NqzCFW6n_eM",
    authDomain: "keydriverotp.firebaseapp.com",
    projectId: "keydriverotp",
    storageBucket: "keydriverotp.firebasestorage.app",
    messagingSenderId: "920869077896",
    appId: "1:920869077896:web:b75944e1a9ef11bcd2703d",
    measurementId: "G-EG01B6NXSZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>