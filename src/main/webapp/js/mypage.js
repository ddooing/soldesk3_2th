/**
 * 
 */

 document.addEventListener('DOMContentLoaded', function () {
    const mypageLink = document.getElementById('mypageLink');
    const mypageMenu = document.getElementById('mypageMenu');

    mypageLink.addEventListener('mouseover', function () {
        mypageMenu.style.display = 'block';
    });

    mypageLink.addEventListener('mouseout', function () {
        mypageMenu.style.display = 'none';
    });
});
