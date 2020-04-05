
$(document).ready(function(){
    $('.flex-container').slideDown(500);
});

// make list items clickable to signal completion
$("section.theList").on("click", "span.listItemText", function() {
    $(this).toggleClass("finished");
});

// make delete button remove list items
$("section.theList").on("click", "span.delete", function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut("200", function() {
        $(this).remove();
    });
});

// add a new item when user hits enter
$("#textInput").on("keydown", function(event) {
if (event.which === 13) {
    $(".theList").append("<div class=\"listItem\"><span class=\"listItemText\">" + $(this).val() + "</span><span class=\"delete\">X</span></div>")
    $(this).val("");  
    } 
})

// clear all list items button
$("#clearAllButton").on("click", function() {
    $(".theList").html("");
})

// Dark mode / Light mode
$("#darkMode").on("click", function() {
    $("body").toggleClass("darkMode");
})

//TODO: 
// Create Priority Flags or 'stars' for important tasks
// Make darkmode toggle change more than just background
//   --- can I do this with a universal class? 
// Make it NOT UGLY!
// Fix margins and padding

