/*JQuery*/
$.noConflict()
jQuery(document).ready(function($) {
    $('.mobile-dropdown').click(function() {
        $('.mobile-dropdown-content').slideToggle(500)
    }),
    $('.closebtn').click(function() {
        $('.alert').css('display', 'none');
    })
})

/*JavaScript*/
//Scroll indicator
// When the user scrolls the page, execute myFunction
function indicator() {
    window.onscroll = function() {ScrollFunction()};
    function ScrollFunction() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("ScrollBar").style.width = scrolled + "%";
        }
}
indicator()
/*-----------*/