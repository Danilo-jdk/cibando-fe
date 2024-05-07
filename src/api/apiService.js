import axios from "axios";


const primaChiamata = () => {
    return  axios.get('urlPrimaChiamata')
}


const secondaChiamata = (test) => {
    return  axios.get('urlsecondaChiamata')
}

export { primaChiamata, secondaChiamata};