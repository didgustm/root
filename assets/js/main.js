// Variations
const main = document.querySelector('main'),
sections = document.querySelectorAll('.aos');

// Scroll
sections.forEach((section, index) => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: "top+=10 bottom",
            onEnter: () => {
                section.classList.add("active");
            },
            onUpdate: ({progress}) => {
                if(index === 1){
                    const scale = progress + 0.7 >= 1? 1: progress + 0.7 < 0.7? 0.7: progress + 0.7;
                    gsap.to(".sct01 .img, .sct01 .inner", {scale})
                }
            }
        }
    })
});

// Tabs;
const buttns = document.querySelectorAll(".tab_area button");
buttns.forEach(x => {
    x.addEventListener("click", (e) => {
        document.querySelector(".tab_area .on").classList.remove("on");
        document.querySelector(".tab_area .show").classList.remove("show");

        x.classList.add("on");
        x.nextElementSibling.classList.add("show")

    })
});

// swiper
const mySwiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween:20,
    navigation: {
        prevEl: ".prev",
        nextEl: ".next"
    },
    breakpoints: {
        1000: {
            slidesPerView: "auto",
            spaceBetween:200,
        }
    }
})