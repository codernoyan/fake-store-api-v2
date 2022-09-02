const loadProducts = async () => {
    const url = `https://fakestoreapi.com/products`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const showCategories = async () => {
    const categories = await loadProducts();
    // console.log(categories);
    categories.forEach(category => {
        console.log(category);
        const { category: menu } = category;
        console.log(menu)
    })
}

showCategories();

// loadProducts()