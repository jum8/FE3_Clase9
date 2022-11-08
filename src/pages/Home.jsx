import React from 'react'
import { useState } from 'react'
import styles from "./Home.module.css";
import Form from '../components/Form';
import Table from '../components/Table';
import materias from '../assets/materias';

export default function Home(props) {

	function handleSubmit(event) {
    event.preventDefault();
		console.log(nota);
		if(nota.materia === '') {
			alert('Seleccione una materia');
			return;
		}

    if(Object.keys(chart).includes(nota.materia)) {
			setChart(prev => (
				{
					...prev, 
					[nota.materia]: { cantidadAlumnos: prev[nota.materia].cantidadAlumnos + 1, sumaNotas: prev[nota.materia].sumaNotas + parseInt(nota.nota)}
				}))
		}
		console.log(chart);
	}

	const [nota, setNota] = useState({materia: '', nota: ''})

  const [chart, setChart] = useState({
		database: { cantidadAlumnos: 0, sumaNotas: 0 },
    backend: { cantidadAlumnos: 0, sumaNotas: 0 },
		frontend: { cantidadAlumnos: 0, sumaNotas: 0 },
		devops: { cantidadAlumnos: 0, sumaNotas: 0 },
		// infra: { cantidadAlumnos: 0, sumaNotas: 0 },
	})

  return (
    <div className={styles.container}>
      <h1>Promedio de Alumnos por Materia</h1>
			<Form materias={materias} setNota={setNota} handleSubmit={handleSubmit}/>
			<Table materias={materias} chart={chart}/>
    </div>
  );
}
