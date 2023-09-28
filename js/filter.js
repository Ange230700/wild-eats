const filterButtonArray = document.querySelectorAll(`.filterButton`);

filterButtonArray.forEach(
    (filterButton) => {
        filterButton.addEventListener(`click`, () => {
            filterButton.nextElementSibling.classList.toggle(`menu`);
        });
    }
);