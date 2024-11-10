function showProduct(productID) {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.product-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    const activeContent = document.getElementById(productID);
    activeContent.style.display = 'flex';
    activeContent.classList.add('active');
    document.querySelector(`[onclick="showProduct('${productID}')"]`).classList.add('active');
}
