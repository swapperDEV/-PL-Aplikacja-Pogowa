const closeSearch = () => {
    const searchUse = document.querySelector('.cities');
    searchUse.style.opacity = 0;
    setTimeout(() => {
        searchUse.style.display = 'none';
    }, 300)
}