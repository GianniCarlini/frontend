import axios from "axios";
const baseUrl = "http://localhost:8080/reserva/cama"
const cama = {};

cama.create = async (state) => {

	const datapost = {
		id_paciente: state.fieldPaciente,
		id_cama: state.fieldCama,
		fecha_ingreso: state.fieldIngreso,
		fecha_salida: state.fieldSalida,
		estado: true
	}

	const urlPost = baseUrl

	const res = await axios.post(urlPost,datapost)
	.then(response=>{
		const data = { success: true, message: response.data }
		return data;
	})
	.catch(error=>{
		const data = { success: false, message: error.response.data }
		return data;
	})

	return res;
}

export default cama