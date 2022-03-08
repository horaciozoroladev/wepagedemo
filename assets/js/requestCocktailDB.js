showOrHide(['spinner'], STYLES.visibility.visible);

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.sq}`;
let drinkX = '';

MENU.filter(item => {
    item.subPages.filter(subItem => {
        if (subItem.stringQuery == params.sq) {
            document.getElementById('productoTitle').innerText = subItem.page;
        }
    });
});

fetch(url, { method: `GET` })
    .then(res => res.json())
    .then(async (data) => {
        await data.drinks.forEach((drink) => {
            drinkX += `
            <div class="card col-sm-12 col-md-6 col-lg-6 mb-4 me-4" style="width: 18rem;">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text"><strong>Category: </strong>${drink.strCategory}</p>
            </div>
            </div>
            `;

        });

        setTimeout(() => {
            document.querySelector('#spinner').style = `display: none`;
            document.getElementById('producto').innerHTML = drinkX;
        }, 1200);
    })
    .catch(error => console.error(`Error on ${url}`, error));