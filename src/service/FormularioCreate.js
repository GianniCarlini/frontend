import axios from "axios";
const baseUrl = "http://localhost:8080/solicitud"
const formulario = {};

formulario.create = async (state) => {
	const datapost = {
		id_paciente: state.fieldPaciente,
		fecha_ingreso: state.fieldIngreso.replace("T"," "),
		motivo: state.fieldMotivo,
		tipo: state.fieldTipo
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

export default formulario