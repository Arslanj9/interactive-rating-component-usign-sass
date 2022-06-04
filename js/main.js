const submitBtn = document.querySelector('.SubmitBtn');
const cardWrapper1 = document.querySelector('.card-wrapper-1');
const cardWrapper2 = document.querySelector('.card-wrapper-2');
const ratingBtns = document.querySelectorAll('.btn');
const score = document.querySelector('.score');
let starsScore = 3;    //default value


//--------- Event Listener ---------
submitBtn.addEventListener('click', btnClicked);
ratingBtns.forEach( btn => {
    btn.addEventListener('click', ratingBtnClicked);
});


//----------- Functions -----------
function btnClicked () {
    cardWrapper1.classList.add('hide');
    cardWrapper2.classList.remove('hide');

    score.textContent = starsScore;
};

function ratingBtnClicked (e) {
    ratingBtns.forEach( btn => {
        btn.classList.remove('active');
    })
    
    e.target.classList.add('active');

    starsScore = e.target.textContent;
};  































// ---------Saved Code-----------

// const submitBtn = document.querySelector('.card-wrapper-1 .SubmitBtn');
// const cardContent_1 = document.querySelector('.card-wrapper-1');
// const cardContent_2 = document.querySelector('.card-wrapper-2');
// const ratingBtns = document.querySelectorAll('.btn');


// //-------- Event Listeners --------
// submitBtn.addEventListener('click', onSubmit);
// ratingBtns.forEach( btn => {
//     btn.addEventListener('click', ratingBtnClicked);
// });


// //---------- Functions -----------
// function onSubmit() {
//     cardContent_1.classList.add('hide');
//     cardContent_2.classList.remove('hide');
// };

// function ratingBtnClicked(e) {
//     // console.log('rating button is clicked');
//     ratingBtns.forEach( btn => {
//         btn.classList.remove('active');
//     })
//     e.target.classList.add('active');
// };




