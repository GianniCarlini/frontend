import axios from 'axios';

const API_URL = "http://localhost:8080"

const getFormulario = () => {
  let url = `${API_URL}/solicitud/ver`;
  return axios.get(url);
}

const FormularioDataService = {
  getFormulario,
};

export default FormularioDataService;