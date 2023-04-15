/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = 'https://platzi-avo.vercel.app/api/avo'
const imgUrl = 'https://platzi-avo.vercel.app/' 
const app = document.querySelector("#app")

function formatPrice(price){
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: "USD"
    }).format(price)

    return newPrice
}

async function fetchData() {
    const response = await fetch(url),
    responseJson = await response.json(),
    allItems = [];

    responseJson.data.forEach((item) => {
        const img = document.createElement("img")
        img.src = imgUrl + item.image;
        img.className = 'img'

        const title = document.createElement('h2')
        title.textContent = item.name
        title.className = 'title'

        const price = document.createElement('p')
        price.textContent = formatPrice(item.price)
        price.className = 'price'

        const container = document.createElement("div");
        container.append(img, title, price);
        container.className = 'container'

        allItems.push(container)
    })

    app.append(...allItems)

}

fetchData();