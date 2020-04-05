
// slide down the whole thing on page load for extra prettiness
$(document).ready(function(){
    $('.flex-container').slideDown(500);
});

// make list items clickable to signal completion
// this watches for clicks on the list item text span,
// but is attached to the whole section so new items get it too
$("section.theList").on("click", "span.listItemText", function() {
    $(this).toggleClass("finished");
});

// make delete button remove list items
// slides them out for prettiness
$("section.theList").on("click", "span.delete", function(event) {
    event.stopPropagation();
    $(this).parent().slideUp("200", function() {
        $(this).remove();
    });
});

// add a new item when user hits enter
// adds whatever user has typed plus html, delete icon, etc
$("#textInput").on("keydown", function(event) {
if (event.which === 13) {
    $(".theList").append("<div class=\"listItem\"><span class=\"listItemText\">" + $(this).val() + "</span><span class=\"material-icons delete\">delete</span></div>")
    $(".theList").find('div').last().hide().slideDown();
    $(this).val("");  
    } 
})

// clear all list items button
// this slides up the whole list,
// then empties it, 
// then slides it out again (so new items can be added)
$("#clearAllButton").on("click", function() {
    $(".theList").slideUp("200", function() {
        $(".theList").html("");
        $(".theList").slideDown();
    });   
})

// Dark mode / Light mode toggle
$("#darkMode").on("click", function() {
    $("body").toggleClass("darkMode");
})

//TODO: 
//
// Create Priority Flags or 'stars' for important tasks
// A bit more styling, fonts could use some work
// Obviously needs to save it's state to be useful at all
//




