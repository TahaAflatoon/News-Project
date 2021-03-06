// JQuery
$.noConflict()
jQuery(document).ready(function($) {
    // Mobile dropdown
    $('.mobile-dropdown').click(function() {
        $('.mobile-dropdown-content').slideToggle(500)
    }),
    // Close button
    $('.closebtn').click(function() {
        $('.alert').css('display', 'none');
    })
})

// JavaScript
// Scroll indicator
// When the user scrolls the page, execute myFunction
function indicator() {
    window.onscroll = function() {ScrollFunction()};
    function ScrollFunction() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("ScrollBar").style.width = scrolled + "%";
        }
}
indicator()