/* eslint-env browser */



/* -----  Function to manage the view of fixed nav when you go to the anchor ------ */

function goAnchor(anchor) {
    /* height of nav */
    var h = document.getElementById("main-header").offsetHeight;
    
    /* start from the top */
    window.scrollTo(0,0);
    
    /* go to the anchor and let space for nav */
    window.scrollBy(0, document.getElementById(anchor).offsetTop - h);
    
}






/* --------- Switch view for resume part  ---------- */

function changeView() {

var viewElt = document.getElementById("change-view");
var extendedElts = document.getElementsByClassName("extended");
var testArticleElt = document.getElementById("test-article-main");
    
    
if (viewElt.checked) {
    testArticleElt.style.display = "none";
    for (var i = 0 ; i < extendedElts.length ; i ++) {
        extendedElts[i].style.display = "block";
    }
} else {
    testArticleElt.style.display = "flex";
    for (var j = 0 ; j < extendedElts.length ; j ++) {
        extendedElts[j].style.display = "none";
    }
}

}








/* -------- Function to open and close complete answer in the interview part ----------- */

/* this array represents all answer blocs */
var answerElts = document.getElementsByClassName("interview-answer");

/* this array represents the state (open/close) for each answer bloc */
var answerOpen = [];
for (var i = 0 ; i < answerElts.length ; i++) {
    answerOpen.push(false);
}

function openAnswer(eltNumber) {

    if (!answerOpen[eltNumber]) {
        
        /* let some space for content and background white */
    answerElts[eltNumber].style.maxHeight = "1000px";
    answerElts[eltNumber].style.backgroundImage = "linear-gradient(to right, white, white)";
        
    answerOpen[eltNumber] = true;
        
    } else {
        
        /* Go back to initial view */
        answerElts[eltNumber].style.maxHeight = "25px";
        answerElts[eltNumber].style.backgroundImage = "linear-gradient(to right, white 70%, #444 100%)"; 
        
        answerOpen[eltNumber] = false;
    }

}






/* ------   Return to start at the end of the video --------- */

var lecteurElt = document.getElementById("introduce");

lecteurElt.onended = function() {
    lecteurElt.currentTime = 0;
};







/* ---------  Thank you message and submit form (EmailJs) ------------- */

var thankYouMsgElt = document.getElementById("thank-you-msg");
var formELt = document.getElementById("contact-form");
var buttonElt = document.getElementById("sendButton");


formELt.addEventListener("submit", function(event) {

    event.preventDefault(); /* No refresh */
    /* Message appears */
    thankYouMsgElt.style.display = "block"; 
    buttonElt.style.display = "none";
    document.body.style.cursor = "wait";
    

    /* send form via EmailJs */
       
    emailjs.sendForm('default_service', 'contact_form', formELt)
    
        .then(function(response) {
           
            /* after success, refresh page */
            location.reload();
            window.scrollTo(0,0);
            
        }, function(error) {
        
            /* Message if error */
            window.alert("Oups something must be wrong here. This does not seem like a good start for a future web developer... My apologies, you can try using the direct contact.");
        }); 

});

