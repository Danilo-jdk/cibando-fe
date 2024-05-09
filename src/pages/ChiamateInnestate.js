import { primaChiamata, secondaChiamata } from "../api/apiService";
import React, {useState, useEffect} from "react";


function ChiamateInnestate() {
    const [dati, setDati] = useState(null);

    useEffect(() => {
        primaChiamata()
            .then(response => {
                // processo i dati della  prima chiamata
                const utente = response.find(item => item.citta === 'roma');
                return secondaChiamata(utente)
                    .then(secondaResponse => {
                        // processo i dati della  seconda chiamata
                        setDati({
                            datiPrincipali: response,
                            datiSecondari: secondaResponse.data
                        })
                    })
                .catch(error => {
                    // gestisco gli errori
                    console.log(error)
                })
            })
    }, [])

}