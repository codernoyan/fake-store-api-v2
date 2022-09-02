/* const showProducts = async () => {
    const products = await loadProducts();
    console.log(products);
}
 */

const searchField = document.getElementById('search-field');
searchField.addEventListener('keyup', async (e) => {
    const targetKey = e.key;
    // check if the key is enter
    if (targetKey === 'Enter') {
        const products = await loadProducts();
        const searchValue = searchField.value;

        // filter search box values only
        const foundProducts = products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()));

        const productsContainer = document.getElementById('products');
        productsContainer.innerHTML = ``;

        foundProducts.forEach(product => {
            console.log(product);

            // destructuring
            const { image, title, price } = product;

            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <div class="card w-full h-96 bg-base-100 shadow-xl rounded-none">
                <figure><img class="w-full h-52 object-cover" src=${image} alt="Shoes" /></figure>
                <div class="card-body">
                <h2 class="card-title">${title.slice(0, 25)}</h2>
                <p>Price: ${price}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary btn-wide">Buy Now</button>
                </div>
                </div>
            </div>
            `;
            productsContainer.appendChild(productDiv);
        })
    }
})