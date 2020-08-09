import axios from 'axios';

const API_URL = "http://localhost:8080"

const getPabellon = () => {
  let url = `${API_URL}/reserva/pabellon/ver`;
  return axios.get(url);
}

const PabellonDataService = {
  getPabellon,
};

export default PabellonDataService;