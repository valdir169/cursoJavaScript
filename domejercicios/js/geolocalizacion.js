const d = document,
    w = document,
    n = navigator;

export default function getGeoLocation(id) {
    const $id = d.getElementById(id),
        option = {
            enableHightAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

    const sucees = position => {
        let coords = position.coords;
        $id.innerHTML =
            `<p>Tu posiicíon actual es
                <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precición: <b>${coords.accuracy}</b> metros</li>
                <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en google masps</a>
                </ul>
            </p>`

        console.log(position);
    }

    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(`Error ${err.code}: ${err.message}`);
    }

    n.geolocation.getCurrentPosition(sucees, error, option);
}