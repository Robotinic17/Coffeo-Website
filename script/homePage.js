const navBar = document.querySelector('.menu-icon').addEventListener("click", () => {
    const slide = document.querySelector('nav ul');
    const overlay = document.querySelector('.overlay');
    const para = document.querySelector('nav p');
    overlay.style.display = 'block';
    slide.style.right = '0';
    setTimeout(() => {
        para.style.opacity = '1';
    }, 400);
});
const xnavBar = document.querySelector('.Xmenu-icon').addEventListener("click", () => {
    const slide = document.querySelector('nav ul');
    const overlay = document.querySelector('.overlay');
    const para = document.querySelector('nav p');
    overlay.style.display = 'none';
    slide.style.right = '-100%'
    para.style.opacity = '0';
});

const xOverLay = document.querySelector('.overlay').addEventListener("click", () => {
    const slide = document.querySelector('nav ul');
    const overlay = document.querySelector('.overlay');
    const para = document.querySelector('nav p');
    overlay.style.display = 'none';
    slide.style.right = '-100%';
    para.style.opacity = '0';
});

