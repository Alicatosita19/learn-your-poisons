document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Loaded");

    
        console.log("Dom Loaded");

        document.getElementById('submit').addEventListener('click', checkPassword);

        
        function checkPassword(event) {
            // Prevent form submission
            event.preventDefault();

            var p_word = document.getElementById('fname').value;

            if(p_word === '1') {
                location.href='poisons/Arsenic.html';
            }
            else if(p_word === '2') {
                location.href='poisons/cyanide.html';
            }
            else if(p_word === '3') {
                location.href='poisons/lead.html';
            }
            else if(p_word === '4') {
                location.href='poisons/francium.html';
            }
                ;
            }     

     
            

    }
);

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Loaded");

    
        console.log("Dom Loaded");

        document.getElementById('return').addEventListener('click', goHome);

        function goHome(event) {
            // Prevent form submission
            event.preventDefault();
            console.log("GOING HOME")
            location.href='../index.html';
        }
    });

        
document.addEventListener('DOMContentLoaded', function () {
            

    document.getElementById('audio').addEventListener('click', playAudio );

    function playAudio(event) {
        // Prevent form submission
        const currentUrl = window.location.href;
        console.log(currentUrl);
        if (currentUrl.includes("Arsenic")) {
            var audio = new Audio("../audio/Arsenic.mp3")
        }

        else if (currentUrl.includes("cyanide")) {
            var audio = new Audio("../audio/Cyanide.mp3")
        }

        else if (currentUrl.includes("francium")) {
            var audio = new Audio("../audio/Francium.mp3")
        }

        else if (currentUrl.includes("lead")) {
            var audio = new Audio("../audio/Lead.mp3")
        }

        console.log("swimming")
        audio.play();
    }
});

    

