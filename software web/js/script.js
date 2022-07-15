(function () {
    var words = [
      "MAKE YOUR IDEA INTO REALITY",
      "MAKE YOUR BUSINESS GROW",
      "DELIGHTS YOUR CUSTOMERS",
      "ALWAYS SATISFY YOUR NEEDS"
    ],
    i = 0;
    
    setInterval(function(){
       $('#words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
       });
       console.log(i)
    }, 4000)
})();

function sendEmail() {
  Email.send({
      Host : "smtp.gmail.com",
      Username : "username",
      Password : "password",
      To : 'them@gmail.com',
      From : document.getElementById("email").value,
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
  message => alert(message)
  );
}