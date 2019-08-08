

function submitData() {
    var description = document.getElementById("getData")

    $.ajax({
        type: "POST",
        url: "/api/post",
        data: {
            userText: description.value
        }
    })

    console.log("JSON posted");
    description.value = "";
}