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
    const faqItems = [...document.querySelectorAll(".faq-item")];

    faqItems.forEach((item) => {
        const body = item.querySelector(".faq-text");
        if (!body) return;
        body.dataset.height = body.scrollHeight + "px";
    });

    const setIcon = (icon, isOpen) => {
        const from = isOpen ? ["rotate-0", "bg-[#EFF0F6]", "gradient-text"] : ["rotate-180", "bg-[#FF4800]", "text-white"];
        const to   = isOpen ? ["rotate-180", "bg-[#FF4800]", "text-white"] : ["rotate-0", "bg-[#EFF0F6]", "gradient-text"];
        from.forEach((cls, i) => icon.classList.replace(cls, to[i]));
    };

    const close = (item) => {
        const body = item.querySelector(".faq-text");
        const icon = item.querySelector(".icon-circle-down");
        if (!body || body.classList.contains("h-0")) return;

        body.style.height = body.scrollHeight + "px";
        body.offsetHeight;
        body.style.height = "0px";
        body.classList.add("h-0");
        icon && setIcon(icon, false);
        item.classList.replace("border-[#FFCAB5]", "border-[#EFF0F6]");
    };

    const open = (item) => {
        const body = item.querySelector(".faq-text");
        const icon = item.querySelector(".icon-circle-down");
        if (!body) return;

        body.classList.remove("h-0");
        body.style.height = body.dataset.height;
        icon && setIcon(icon, true);
        item.classList.replace("border-[#EFF0F6]", "border-[#FFCAB5]");

        body.addEventListener("transitionend", () => {
            if (!body.classList.contains("h-0")) body.style.height = "";
        }, { once: true });
    };

    faqItems.forEach((item) => {
        item.addEventListener("click", () => {
            const isOpen = !item.querySelector(".faq-text")?.classList.contains("h-0");
            faqItems.forEach(close);
            if (!isOpen) open(item);
        });
    });
});