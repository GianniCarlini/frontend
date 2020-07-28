import React, {Component} from 'react';
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const Mes = [
  { value: 'Enero', label: 'Enero' },{ value: 'Febrero', label: 'Febrero' },{ value: 'Marzo', label: 'Marzo' },{ value: 'Abril', label: 'Abril' },
  { value: 'Mayo', label: 'Mayo' },{ value: 'Junio', label: 'Junio' },{ value: 'Julio', label: 'Julio' },{ value: 'Agosto', label: 'Agosto' },
  { value: 'Septiembre', label: 'Septiembre' },{ value: 'Octubre', label: 'Octubre' },{ value: 'Noviembre', label: 'Noviembre' },
  { value: 'Diciembre', label: 'Diciembre' }
]
const Dia = [
  { value:1, label: '1'},{ value:2, label: '2'},{ value:3, label: '3'},{ value:4, label: '4'},{ value:5, label: '5'},{ value:6, label: '6'},
  { value:7, label: '7'},{ value:8, label: '8'},{ value:9, label: '9'},{ value:10, label: '10'},{ value:11, label: '11'},{ value:12, label: '12'},
  { value:13, label: '13'},{ value:14, label: '14'},{ value:15, label: '15'},{ value:16, label: '16'},{ value:17, label: '17'},{ value:18, label: '18'},
  { value:19, label: '19'},{ value:20, label: '20'},{ value:21, label: '21'},{ value:22, label: '22'},{ value:23, label: '23'},{ value:24, label: '24'},
  { value:25, label: '25'},{ value:26, label: '26'},{ value:27, label: '27'},{ value:28, label: '28'},{ value:29, label: '29'},{ value:30, label: '30'},
  { value:31, label: '31'}
]
const Ano = [
  { value:2020, label: '2020'},{ value:2021, label: '2021'},{ value:2022, label: '2022'},{ value:2023, label: '2023'},{ value:2024, label: '2024'},
  { value:2025, label: '2025'},{ value:2026, label: '2026'},{ value:2027, label: '2027'},{ value:2028, label: '2028'},{ value:2028, label: '2028'},
  { value:2029, label: '2029'},{ value:2030, label: '2030'},{ value:2031, label: '2032'},{ value:2033, label: '2033'},{ value:2034, label: '2034'},
  { value:2035, label: '2036'},{ value:2037, label: '2037'},{ value:2038, label: '2038'},{ value:2039, label: '2039'},{ value:2040, label: '2040'},
  { value:2041, label: '2041'},{ value:2042, label: '2042'},{ value:2043, label: '2043'},{ value:2044, label: '2044'},{ value:2045, label: '2045'}

]
class Pabellon extends Component{
    render() {
        return (
          <div className="content-wrapper">
            <section className="content-header">
              <h1>Reserva de pabellón</h1>
            </section>
            <section className="content">
              <div className="row">
                <div className="col-md-6">
                  <div className="box box-primary">
                    <form>
                      <div className="form-group">
                        <label>Paciente</label>
                        <Select
                          className="paciente"
                          defaultValue=" "
                          options={options}
                        />
                      </div>
                      <div className="form-group">
                        <label>Pabellón</label>
                        <Select
                          className="pabellon"
                          defaultValue={" "}
                          options={options}
                        />
                      </div>
                      <div className="form-group">
                        <label>Equipo médico</label>
                        <Select
                          className="equipo"
                          defaultValue={" "}
                          options={options}
                        />
                      </div>
                      <div className="form-group">
                        <label>Hora de inicio</label>
                        <div className="row">
                          <div className="col">
                            <Select
                              className="dia inicio"
                              defaultValue={Dia[0]}
                              options={Dia}
                            />
                          </div>
                          <div className="col">
                            <Select
                              className="Mes"
                              defaultValue={Mes[0]}
                              options={Mes}
                            />
                          </div>
                          <div className="col">
                            <Select
                              className="Ano"
                              defaultValue={Ano[0]}
                              options={Ano}
                            />
                          </div>
                          <div className="col">
                            <Select
                              className="Ano"
                              defaultValue={Ano[0]}
                              options={Ano}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Hora de termino</label>
                        <div className="row">
                          <div className="col">
                            <Select
                              className="dia inicio"
                              defaultValue={Dia[0]}
                              options={Dia}
                            />
                          </div>
                          <div className="col">
                            <Select
                              className="Mes"
                              defaultValue={Mes[0]}
                              options={Mes}
                            />
                          </div>
                          <div className="col">
                            <Select
                              className="Ano"
                              defaultValue={Ano[0]}
                              options={Ano}
                            />
                          </div>
                          <div className="col">
                            <Select
                              className="Ano"
                              defaultValue={Ano[0]}
                              options={Ano}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-10">
                          <button type="submit" className="btn btn-primary">
                            Enviar
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default Pabellon;