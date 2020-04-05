
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

