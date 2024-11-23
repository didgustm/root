// Register
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

// Smooth scroll
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(time => {
    lenis.raf(time * 1000)
});
gsap.ticker.lagSmoothing(0);

// Gnb open
function handleOpen(){
    document.querySelector(".btn_open").classList.toggle("open");
    document.querySelector(".gnb").classList.toggle("show")
}

// Throttle
function throttle(callback, delay){
    let timer;
    return function(){
        if(!timer){
            timer = setTimeout(_ => {
                callback.apply(this, arguments);
                timer = undefined
            }, delay)
        }
    }
}
