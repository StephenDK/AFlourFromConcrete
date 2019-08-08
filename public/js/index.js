

function submitData() {
    var description = document.getElementById("getData").value;

    $.ajax({
        type: "POST",
        url: "/api/post",
        data: {
            userText: description
        }
    })
    console.log("JSON posted");
}