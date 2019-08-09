document.addEventListener('DOMContentLoaded', () => init());

const init = () => {
    const navbar = document.querySelector('.sidenav');
    const instances = M.Sidenav.init(navbar);

    const carousel = document.querySelector('.carousel');
    
    const instance = M.Carousel.init(carousel, {
        fullWidth: true,
        indicators: true
    });
    
    const setHeight = () => carousel.style.height = `${window.innerHeight - 56}px`;

    // Setting height (init);
    setHeight();

    // Setting height (browser resizing);
    document.body.onresize = () => setHeight();
}
