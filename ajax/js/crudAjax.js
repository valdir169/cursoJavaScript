/* star json server
json-server --watch ajax/db.json 
*/

const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

// 1. create a function
const ajax = (options) => {
    let { url, method, success, error, data } = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            // convertir la respuesta en formato json a objecto javascript 
            let json = JSON.parse(xhr.responseText);
            success(json)
        } else {
            let message = xhr.statusText || "Ocurrio un error";
            error(`Error ${xhr.status}: ${message}`);
        }
    })

    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(data))
}


const getAll = () => {
    ajax({
        url: "http://localhost:3000/drivers",
        success: (res) => {
            console.log(res);
            res.forEach(el => {
                $template.querySelector(".delete").dataset.id = el.id;
                $template.querySelector(".name").textContent = el.name;
                $template.querySelector(".nationality").textContent = el.nationality;
                $template.querySelector(".age").textContent = el.age;
                $template.querySelector(".team").textContent = el.team;

                // variables for the buttons
                $template.querySelector(".edit").dataset.id = el.id;
                $template.querySelector(".edit").dataset.name = el.name;
                $template.querySelector(".edit").dataset.nationality = el.nationality;
                $template.querySelector(".edit").dataset.age = el.age;
                $template.querySelector(".edit").dataset.team = el.team;



                let clone = d.importNode($template, true);
                $fragment.appendChild(clone);
            })

            $table.querySelector("tbody").appendChild($fragment);
        },
        error: (err) => {
            console.log(err);
            $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
        }
    })
}

//add evenlistener
d.addEventListener("DOMContentLoaded", getAll)


/*  */
d.addEventListener("submit", e => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {
            //POST -> create

            ajax({
                url: "http://localhost:3000/drivers",
                method: "POST",
                success: (res) => location.reload(),
                error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
                data: {
                    name: e.target.name.value,
                    nationality: e.target.nationality.value,
                    age: e.target.age.value,
                    team: e.target.team.value,
                }
            });

        } else {
            //PUT -> update
            ajax({
                url: ``,
                method: "PUT",
                success: (res) => location.reload(),
                error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
                data: {
                    name: e.target.name.value,
                    nationality: e.target.nationality.value,
                    age: e.target.age.value,
                    team: e.target.team.value,
                }
            });
        }
    }
})


d.addEventListener("click", e => {
    if (e.target.matches(".edit")) {
        $title.textContent = "Editar Piloto";

        $form.name.value = e.target.dataset.name;
        $form.nationality.value = e.target.dataset.nationality;
        $form.age.value = e.target.dataset.age;
        $form.team.value = e.target.dataset.team;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(`En realidad desea eliminar este piloto  ${e.target.dataset.id}`);

        if (isDelete) {
            /* DELETE -> delete */
            ajax({
                url: `http://localhost:3000/drivers/${e.target.dataset.id}`,
                method: "DELETE",
                success: (res) => location.reload(),
                error: (err) => alert(err),
            });
        }

    }
})