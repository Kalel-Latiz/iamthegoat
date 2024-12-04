AOS.init();
// Reveal testimonials on scroll
document.addEventListener("scroll", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const triggerPoint = window.innerHeight - 100;

    testimonials.forEach((testimonial) => {
        const top = testimonial.getBoundingClientRect().top;
        if (top < triggerPoint) {
            testimonial.classList.add("visible");
        }
    });
});
