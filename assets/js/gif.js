function onSearch() {
    let gif = document.getElementById("userSearch").value;
    fetch("https://api.giphy.com/v1/gifs/search?api_key=vahygQFZPbEbxP5aREOPN0lZMgrbkeAI&q=" + gif + "&limit=1&offset=0&rating=g&lang=en")
        .then(Response => Response.json())
        .then(giphy => {
            console.log(giphy);
            document.getElementById("gif").src = giphy.data[0].images.original.url;
        })
}