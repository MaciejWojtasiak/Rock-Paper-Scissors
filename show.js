const aboutBtn = document.getElementById('about-text');
const closeBtn = document.getElementById('closeBtn');
const aboutDiv = document.querySelector('.about');

aboutBtn.addEventListener('click', () => {
    aboutDiv.classList.add('active');
    console.log("klik")
})

closeBtn.addEventListener('click', () => {
    aboutDiv.classList.remove('active');
})
