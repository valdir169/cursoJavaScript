const d = document;

export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", e => {
        if (e.target === $form) {
            e.preventDefault();
            tester = window.open($form.direction.value, "tester", `innerWidth = ${$form.widthPage.value}, innerHeight = ${$form.altPage.value}`);
        }
    });

    d.addEventListener("click", (e) => {
        if (e.target === $form.cerrar) {
            tester.close();
        }   
    })
}