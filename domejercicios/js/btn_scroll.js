const d = document,
    w = window;

export default function scrollTopButton(btn) {
    const $scrollButton = document.querySelector(btn);

    w.addEventListener("scroll", e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        if ( scrollTop > 300) {
            $scrollButton.classList.remove("hidden");
        } else {
            $scrollButton.classList.add("hidden");
        }
    });

    d.addEventListener("click", e => { 
        if(e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    });
}