// Variations
const main = document.querySelector('main'),
sections = document.querySelectorAll('.aos');

// Scroll
sections.forEach((section, index) => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            onEnter: () => {
                section.classList.add("active");
            },
            onUpdate: ({progress}) => {
                if(index === 1){
                    const scale = progress + 0.7 >= 1? 1: progress + 0.7;
                    gsap.to(".sct01 .img", {scale})
                    gsap.to(".sct01 .inner", {scale})
                }
            }
        }
    })
})


// ScrollTrigger.create({
//     trigger: main,
//     onUpdate: target => {
//         sections.forEach((x) => throttle(scrollActive(target, x), 120));
//     }
// });

// Scroll Active
function scrollActive(target, x){
    if(target.progress > x.offsetTop / (target.end + window.innerHeight / 1.1)){
        x.classList.add('active');
    }
}

// swiper
const mySwiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween:20,
    breakpoints: {
        1000: {
            slidesPerView: "auto",
            spaceBetween:200,
        }
    }
})