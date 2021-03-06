import axios from "axios";
const baseUrl = "http://localhost:8080/reserva/pabellon"
const pabellon = {};

pabellon.create = async (state) => {

	const datapost = {
		resId:{
			fecha_ingreso: state.fieldIngreso.replace("T"," "),
			fecha_salida: state.fieldSalida.replace("T"," "),
			id_pabellon: state.fieldPabellon
		},
		id_paciente: state.fieldPaciente,
		id_equipo: state.fieldEquipo,
		estado: true,
		motivo: state.fieldMotivo
		
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