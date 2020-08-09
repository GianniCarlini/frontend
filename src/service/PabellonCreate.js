import axios from "axios";
const baseUrl = "http://localhost:8080/reserva/pabellon"
const pabellon = {};

pabellon.create = async (state) => {

	const datapost = {
		id_paciente: state.fieldPaciente,
		id_pabellon: state.fieldPabellon,
		id_equipo: state.fieldEquipo,
		fecha_ingreso: state.fieldIngreso,
		fecha_salida: state.fieldSalida,
		motivo: state.fieldMotivo,
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

export default pabellon