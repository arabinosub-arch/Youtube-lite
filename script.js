function openYouTube() {

    document.getElementById("status").innerText =
        "Launching YouTube...";

    document.querySelector(".container")
        .classList.add("launch");

    setTimeout(() => {
        window.open("https://m.youtube.com", "_blank");

        document.querySelector(".container")
            .classList.remove("launch");

        document.getElementById("status").innerText = "";
    }, 800);
}

function openLinktree() {

    document.getElementById("status").innerText =
        "Opening Linktree...";

    document.querySelector(".container")
        .classList.add("launch");

    setTimeout(() => {
        window.open("https://linktr.ee/arabinosub", "_blank");

        document.querySelector(".container")
            .classList.remove("launch");

        document.getElementById("status").innerText = "";
    }, 800);
}
