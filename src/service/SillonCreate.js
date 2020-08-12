import axios from "axios";
const baseUrl = "http://localhost:8080/reserva/sillon"
const sillon = {};

sillon.create = async (state) => {

	const datapost = {
		quimioId:{
			fecha_ingreso: state.fieldIngreso.replace("T"," "),
			fecha_salida: state.fieldSalida.replace("T"," "),
			id_sillon: state.fieldSillon
		},
		id_paciente: state.fieldPaciente,
		estado: true,
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

export default sillon