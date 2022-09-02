const showCategory = async (itemCategory) => {
    const newCategory = await loadProducts();

    const filteredCategory = newCategory.filter(item => item.category.includes(itemCategory));
    console.log(filteredCategory);

    const itemContainer = document.getElementById('products');
    itemContainer.innerHTML = ``;

    filteredCategory.forEach(product => {
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
        itemContainer.appendChild(productDiv);
    })
}

