const loadProducts = async () => {
    const url = `https://fakestoreapi.com/products`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const showCategories = async () => {
    const categories = await loadProducts();
    // console.log(categories);
    const menuContainer = document.getElementById('product-menu');
    const uniqueArray = [];
    categories.forEach(category => {
        // console.log(category);
        const { category: menu, id } = category;

        // remove duplicates and show menu
        if (uniqueArray.includes(menu) === false) {
            uniqueArray.push(menu);
            const li = document.createElement('li');
            li.innerHTML = `
                <a onclick="showCategory('${menu.slice(0, 2)}')">${menu}</a>
            `;
            menuContainer.appendChild(li);
        }       
    })
}

showCategories();

// loadProducts()