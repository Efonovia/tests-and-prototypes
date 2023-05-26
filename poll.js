let votes = document.querySelector('.votes');
let option1 = document.querySelector('.ans1');
let option2 = document.querySelector('.ans2');
let option3 = document.querySelector('.ans3');
let option4 = document.querySelector('.ans4');

let votesNum = 0;
let option1Num = 0;
let option2Num = 0;
let option3Num = 0;
let option4Num = 0;



option1.addEventListener('click', () => {
    votesNum++;
    option1Num++;
    if (votesNum === 1) {
        votes.textContent = votesNum + " Vote";
    } else {
        votes.textContent = votesNum + " Votes";
    }
    option1.childNodes[1].style.display = "block"
    option1.childNodes[1].style.marginTop = "-4.25%"
        //option1.pointerEvents = "none";
    option1.classList.remove('answer');
    option2.classList.add('answer');
    option3.classList.add('answer');
    option4.classList.add('answer');

    option2.childNodes[1].style.display = "block";
    option3.childNodes[1].style.display = "block";
    option4.childNodes[1].style.display = "block";

    option1Percent = Math.round((option1Num/votesNum) * 100) + "%";
   console.log("option1Percent", option1Percent);
   option1.childNodes[3].textContent = option1Percent;

   option2Percent = Math.round((option2Num/votesNum) * 100) + "%";
   console.log("option2Percent", option2Percent);
   option2.childNodes[3].textContent = option2Percent;

   option3Percent = Math.round((option3Num/votesNum) * 100) + "%";
   console.log("option3Percent", option3Percent);
   option3.childNodes[3].textContent = option3Percent;

   option4Percent = Math.round((option4Num/votesNum) * 100) + "%";
   console.log("option4Percent", option4Percent);
   option4.childNodes[3].textContent = option4Percent;

   option1.childNodes[1].style.width = `calc(${option1Percent} - 10.6%)`;
   option2.childNodes[1].style.width = `calc(${option2Percent} - 10.6%)`;
   option3.childNodes[1].style.width = `calc(${option3Percent} - 10.6%)`;
   option4.childNodes[1].style.width = `calc(${option4Percent} - 10.6%)`;
});

option2.addEventListener('click', () => {
    votesNum++;
    option2Num++;
    if (votesNum === 1) {
        votes.textContent = votesNum + " Vote";
    } else {
        votes.textContent = votesNum + " Votes";
    }
    option2.childNodes[1].style.display = "block";
    option1.childNodes[1].style.display = "block";
    option3.childNodes[1].style.display = "block";
    option4.childNodes[1].style.display = "block";

    option2.childNodes[1].style.marginTop = "-4.25%";
        //option2.pointerEvents = "block";
    option2.classList.remove('answer');
    option1.classList.add('answer');
    option3.classList.add('answer');
    option4.classList.add('answer');

    option1Percent = Math.round((option1Num/votesNum) * 100) + "%";
   console.log("option1Percent", option1Percent);
   option1.childNodes[3].textContent = option1Percent;
   console.log(option2.childNodes[1]);
   
   option2Percent = Math.round((option2Num/votesNum) * 100) + "%";
   console.log("option2Percent", option2Percent);
   option2.childNodes[3].textContent = option2Percent;

   option3Percent = Math.round((option3Num/votesNum) * 100) + "%";
   console.log("option3Percent", option3Percent);
   option3.childNodes[3].textContent = option3Percent;

   option4Percent = Math.round((option4Num/votesNum) * 100) + "%";
   console.log("option4Percent", option4Percent);
   option4.childNodes[3].textContent = option4Percent;

   option1.childNodes[1].style.width = `calc(${option1Percent} - 10.6%)`;
   option2.childNodes[1].style.width = `calc(${option2Percent} - 10.6%)`;
   option3.childNodes[1].style.width = `calc(${option3Percent} - 10.6%)`;
   option4.childNodes[1].style.width = `calc(${option4Percent} - 10.6%)`;
});

option3.addEventListener('click', () => {
    votesNum++;
    option3Num++;
    if (votesNum === 1) {
        votes.textContent = votesNum + " Vote";
    } else {
        votes.textContent = votesNum + " Votes";
    }
   option3.childNodes[1].style.display = "block"
   option3.childNodes[1].style.marginTop = "-4.25%"
    //option3.pointerEvents = "block";
   option3.classList.remove('answer');
   option2.classList.add('answer');
   option1.classList.add('answer');
   option4.classList.add('answer');

   option2.childNodes[1].style.display = "block";
   option1.childNodes[1].style.display = "block";
   option4.childNodes[1].style.display = "block";

   option1Percent = Math.round((option1Num/votesNum) * 100) + "%";
   console.log("option1Percent", option1Percent);
   option1.childNodes[3].textContent = option1Percent;

   option2Percent = Math.round((option2Num/votesNum) * 100) + "%";
   console.log("option2Percent", option2Percent);
   option2.childNodes[3].textContent = option2Percent;

   option3Percent = Math.round((option3Num/votesNum) * 100) + "%";
   console.log("option3Percent", option3Percent);
   option3.childNodes[3].textContent = option3Percent;

   option4Percent = Math.round((option4Num/votesNum) * 100) + "%";
   console.log("option4Percent", option4Percent);
   option4.childNodes[3].textContent = option4Percent;

   option1.childNodes[1].style.width = `calc(${option1Percent} - 10.6%)`;
   option2.childNodes[1].style.width = `calc(${option2Percent} - 10.6%)`;
   option3.childNodes[1].style.width = `calc(${option3Percent} - 10.6%)`;
   option4.childNodes[1].style.width = `calc(${option4Percent} - 10.6%)`;
});

option4.addEventListener('click', () => {
    votesNum++;
    option4Num++;
    if (votesNum === 1) {
        votes.textContent = votesNum + " Vote";
    } else {
        votes.textContent = votesNum + " Votes";
    }
   option4.childNodes[1].style.display = "block"
   option4.childNodes[1].style.marginTop = "-4.25%"
    //option4.pointerEvents = "block";
   option4.classList.remove('answer');
   option2.classList.add('answer');
   option3.classList.add('answer');
   option1.classList.add('answer');

   option2.childNodes[1].style.display = "block";
   option3.childNodes[1].style.display = "block";
   option1.childNodes[1].style.display = "block";

   option1Percent = Math.round((option1Num/votesNum) * 100) + "%";
   console.log("option1Percent", option1Percent);
   option1.childNodes[3].textContent = option1Percent;

   option2Percent = Math.round((option2Num/votesNum) * 100) + "%";
   console.log("option2Percent", option2Percent);
   option2.childNodes[3].textContent = option2Percent;

   option3Percent = Math.round((option3Num/votesNum) * 100) + "%";
   console.log("option3Percent", option3Percent);
   option3.childNodes[3].textContent = option3Percent;

   option4Percent = Math.round((option4Num/votesNum) * 100) + "%";
   console.log("option4Percent", option4Percent);
   option4.childNodes[3].textContent = option4Percent;

   option1.childNodes[1].style.width = `calc(${option1Percent} - 10.6%)`;
   option2.childNodes[1].style.width = `calc(${option2Percent} - 10.6%)`;
   option3.childNodes[1].style.width = `calc(${option3Percent} - 10.6%)`;
   option4.childNodes[1].style.width = `calc(${option4Percent} - 10.6%)`;

});
