/* const showProducts = async () => {
    const products = await loadProducts();
    console.log(products);
}
 */

const searchField = document.getElementById('search-field');
searchField.addEventListener('keyup', async(e) => {
    const targetKey = e.key;
    // check if the key is enter
    if (targetKey === 'Enter') {
        const products = await loadProducts();
        const searchValue = searchField.value;
        
        // filter search box values only
        const foundProducts = products.filter(product => product.includes(searchValue));
    }
})