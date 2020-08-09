import axios from 'axios';

const API_URL = "http://localhost:8080"

const getCama = () => {
  let url = `${API_URL}/reserva/cama/ver`;
  return axios.get(url);
}

const CamaDataService = {
  getCama,
};

export default CamaDataService;