
function sendMail(contactForm) {
var templateParams = {
    "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "feedback": contactForm.feedback.value,
};

   emailjs.send("gmail","Pollination", templateParams) 
   
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
         });

    return false;
        
        }
    
    

    

    