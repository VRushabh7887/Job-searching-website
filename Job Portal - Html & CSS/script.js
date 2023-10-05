$(".card").on("click", function() {
    $(".detail").addClass("active");
});
// details box should be close when click on close button    
$(".close-detail").on("click", function() {
    $(".detail").removeClass("active");
});

$(".menu-bar").on("click", function() {
    $(".sidebar").addClass("active");
});

$(".logo").on("click", function() {
    $(".sidebar").removeClass("active");
})

// sidebar should close when click on close button
$(".close-sidebar").on("click", function() {
    $(".sidebar").removeClass("active");
});