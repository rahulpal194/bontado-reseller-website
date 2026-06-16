window.addEventListener('scroll', function(){
    const headernav = document.querySelector('.db-header')
    if(window.pageYOffset >= 30){
        headernav.classList.add('fixed')
    }
    else{
        headernav.classList.remove('fixed')
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const faqs = [...document.querySelectorAll(".faq-item")];

    faqs.forEach(item => {
        const body = item.querySelector(".faq-text");
        Object.assign(body.style, { height: "0px", overflow: "hidden", transition: "height .3s ease" });
        body.dataset.h = body.scrollHeight + "px";
    });

    const isOpen = item => item.querySelector(".faq-text").style.height !== "0px";

    const toggle = (item, open) => {
        const body = item.querySelector(".faq-text");
        const iconDiv = item.querySelector(".icon-div");
        const icon = iconDiv?.querySelector("i");

        if (open) body.style.height = body.dataset.h;
        else { body.style.height = body.scrollHeight + "px"; body.offsetHeight; body.style.height = "0px"; }

        iconDiv?.classList.toggle("bg-[#EFF0F6]", !open);
        iconDiv?.classList.toggle("bg-[#FF4800]", open);
        icon?.classList.toggle("rotate-180", open);
        icon?.classList.toggle("text-white", open);
        item.classList.toggle("border-[#FFCAB5]", open);
        item.classList.toggle("border-[#EFF0F6]", !open);

        if (open) body.addEventListener("transitionend", () => { body.style.height = "auto"; }, { once: true });
    };

    faqs.forEach(item => item.addEventListener("click", () => {
        const wasOpen = isOpen(item);
        faqs.forEach(f => isOpen(f) && toggle(f, false));
        if (!wasOpen) toggle(item, true);
    }));

    // Smooth scroll to top for "Back to top" links
    const backToTopLinks = document.querySelectorAll(".back-to-top");
    backToTopLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
});