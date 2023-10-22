// toggle class active
const navbarNav = document.querySelector ('.navbar-nav');

// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = (e) => 
{
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// ketika diklik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    {
        navbarNav.classList.remove('active');
    }
});
