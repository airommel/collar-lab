window.onload = () => {
    fetchData()
    console.log("hi")
}
const API_URL = "http://localhost:8080"

async function fetchData() {
    let resp = await fetch(`${API_URL}/tracks`)
    let tracks = await resp.json()
    console.log(tracks)

    const target = document.querySelector(".main")
    const template = document.querySelector("#track-card-template")

    let clone = template.content.cloneNode(true)
    let title = clone.querySelector(".card-title")
    title.textContent = "The Bright Side"
    let content = clone.querySelector(".card-content > p")
    content.textContent = "Release Date: 2023-01-13"
    let action = clone.querySelector(".card-action > a")
    action.href = "https://open.spotify.com/track/1k4epQqpbGkyIm3O6bRALu"

    target.appendChild(clone)

}