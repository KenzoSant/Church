document.addEventListener("DOMContentLoaded", () => {
    const buttonsWrapper = document.querySelector(".map");
    const slides = document.querySelector(".inner");

    buttonsWrapper.addEventListener("click", e => {
        if (e.target.nodeName === "BUTTON") {
            Array.from(buttonsWrapper.children).forEach(item =>
                item.classList.remove("active")
            );
            e.target.classList.add("active");

            const buttonIndex = Array.from(buttonsWrapper.children).indexOf(e.target);
            const translateValue = -100 / (buttonsWrapper.children.length) * buttonIndex;
            slides.style.transform = `translateX(${translateValue}%)`;
        }
    });
});
