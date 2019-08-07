document.addEventListener('DOMContentLoaded', () => init());

const init = () => {
    const nav = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);

    const carousel = document.querySelector('.carousel');
    
    const instance = M.Carousel.init(carousel, {
        fullWidth: true,
        indicators: true
    });

    const setHeight = () => carousel.style.height = `${window.innerHeight}px`;

    // Setting height (init);
    setHeight();

    // Setting height (browser resizing);
    document.body.onresize = () => setHeight();
}
