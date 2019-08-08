

function submitData() {
    var description = document.getElementById("getData");
    if (description.value != '') {
        $.ajax({
            type: "POST",
            url: "/api/post",
            data: {
                userText: description.value
            }
        })
        
        console.log("JSON posted");
        description.value = '';
    } else {
        alert("You must enter something");
    }

    
}