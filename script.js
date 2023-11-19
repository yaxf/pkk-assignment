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

// membuat visitor counter
document.addEventListener('DOMContentLoaded', function() {
    var count = localStorage.getItem('visitorCount');
    if (count) {
        count = parseInt(count);
    } else {
        count = 0;
    }

    count += 1;
    localStorage.setItem('visitorCount', count);

    document.getElementById('visitorCount').innerHTML = count;
});