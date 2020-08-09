import axios from 'axios';

const API_URL = "http://localhost:8080"

const getSillon = () => {
  let url = `${API_URL}/reserva/sillon/ver`;
  return axios.get(url);
}

const SillonDataService = {
  getSillon,
};

export default SillonDataService;