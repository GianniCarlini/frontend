import axios from "axios";
const baseUrl = "http://localhost:8080/solicitud/update/"
const formulario = {};

formulario.create = async (state) => {

	const datapost = {
		id: state.fieldId,
		id_paciente: state.fieldPaciente,
		fecha_ingreso: state.fieldIngreso,
		motivo: state.fieldMotivo,
		tipo: state.fieldTipo
	}

	const urlPost = baseUrl + datapost.id

	console.log(urlPost)

	const res = await axios.put(urlPost,datapost)
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