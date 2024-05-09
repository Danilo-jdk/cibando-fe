import axios from "axios";


const primaChiamata = () => {
    return  axios.get('urlPrimaChiamata')
}


const secondaChiamata = (user) => {
    return  axios.get('urlsecondaChiamata')
}

export { primaChiamata, secondaChiamata};