// //icons
// const sunIcon = document.querySelector(".sun");
// const moonIcon = document.querySelector(".moon")


// //Theme Vars
// const userTheme =  localStorage.getItem("theme");
// const systemTheme = window.matchMedia("perfers-color-scheme: dark").matches;

// //Icon Toggling
// const iconToggle = () =>{
//     moonIcon.classList.toggle("display-none");
//     sunIcon.classList.toggle("display-none");
// };

// //Initial Theme Check
// const themeCheck = () => {
//     if(userTheme === "dark" || (!userTheme && systemTheme)){
//         document.documentElement.classList.add("dark");
//         moonIcon.classList.add("display-none");
//         return;
//     }
//     sunIcon.classList.add("display-none");
// };

// //Menual Theme Switch
// const themeSwitch = () => {
//     if (
//         document.documentElement.classList.contains("dark")){
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("theme","dark");
//             iconToggle();
//             return;
//         }
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme","dark");
//     iconToggle();
// };

// //call theme switch on clicking buttons
// sunIcon.addEventListener("click", ()=>{
//     themeSwitch();
// });

// moonIcon.addEventListener("click", () =>{
//     themeSwitch();
// })

// //invoke theme check on initial load
// themeCheck();

var themeToggleDarkIcon = document.getElementById('dark-icon');
var themeToggleLightIcon = document.getElementById('light-icon');


// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            localStorage.setItem('theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    }
    
});

