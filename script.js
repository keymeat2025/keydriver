const auth = firebase.auth();

function sendOtp() {
  const phoneNumber = document.getElementById("phone").value;
  const appVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");

  auth.signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(confirmationResult => {
      window.confirmationResult = confirmationResult;
      document.getElementById("status").innerText = "OTP sent! Check your phone.";
    })
    .catch(error => {
      document.getElementById("status").innerText = `Error: ${error.message}`;
    });
}

function verifyOtp() {
  const code = document.getElementById("otp").value;

  window.confirmationResult.confirm(code)
    .then(result => {
      const user = result.user;
      document.getElementById("status").innerText = `Phone number verified! UID: ${user.uid}`;
    })
    .catch(error => {
      document.getElementById("status").innerText = `Error: ${error.message}`;
    });
}
