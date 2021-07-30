/*JQuery*/
$.noConflict()
jQuery(document).ready(function($) {
    //mobile dropdown
    $('.mobile-dropdown').click(function() {
        $('.mobile-dropdown-content').slideToggle(500)
    }),
    //close button
    $('.closebtn').click(function() {
        $('.alert').css('display', 'none');
    })
})

/*JavaScript*/
//Scroll indicator
//when the user scrolls the page, execute myFunction
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