document.querySelector("#search-item")
.addEventListener('input', filterList)

function filterList () {
    const searchInput = document.querySelector("#search-item")
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll(".card")

    listItems.forEach((item) => {
        let text = item.textContent
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = ''
        } else {
            item.style.display = 'none'
        }
    })
}