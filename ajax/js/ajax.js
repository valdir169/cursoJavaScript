(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);

            // console.log(xhr.responseText);
            // console.log(json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            })

            $xhr.appendChild($fragment);
        } else {
            let message = xhr.statusText || "Ocurrio algun error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`
            console.log("error");
        }
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.send();

})();


// (() => {
//     const xhr = new XMLHttpRequest(),
//         $post = document.getElementById("post"),
//         $fragment = document.createDocumentFragment();

//     xhr.addEventListener("readystatechange", (e) => {
//         // console.log(xhr.responseText);
//         // console.log(xhr);

//         if (xhr.readyState !== 4) return;

//         if (xhr.status >= 200 && xhr.status < 300) {
//             let json = JSON.parse(xhr.responseText);
//             // console.log(json);

//             json.forEach(el => {
//                 const $card = document.createElement("div"),
//                     $title = document.createElement("h2"),
//                     $body = document.createElement("p");

//                 $card.classList.add("post__container");

//                 $title.textContent = el.title;
//                 $title.classList.add("title");
//                 $body.textContent = el.body;
//                 $body.classList.add("body");

//                 $card.appendChild($title);
//                 $card.appendChild($body);

//                 $fragment.appendChild($card);
//             })
//             $post.appendChild($fragment);
//         }

//     });

//     xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

//     xhr.send();
// })();



// USE FETCH

(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")

        .then((res) => res.ok ? res.json() : Promise.reject(res))
        // .then((res) => {
        //     console.log(res);
        //     return res.ok ? res.json(): Promise.reject(res);
        // })

        .then((json) => {
            console.log(json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            }
            )
            // $fetch.innerHTML = json;
            $fetch.appendChild($fragment);
})
    .catch((err) => {
        console.log(err);
        let message = err.statusText || "Ocurrio algun error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`
        console.log("error");
        $xhr.appendChild($fragment);
    })
    .finally(() => {
        console.log("Esto se jecutara independientemente de la promesa fetch");
    }
    );
}) ();
