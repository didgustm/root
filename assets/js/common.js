// Register
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

// Smooth scroll
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(time => {
    lenis.raf(time * 1000)
});
gsap.ticker.lagSmoothing(0);

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
