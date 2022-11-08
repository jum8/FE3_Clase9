import React from 'react'

export default function Table({materias, chart}) {
	return (
		<table border="1" className="line_title">
			<thead>
				<tr>
					<th>Materia</th>
					<th>Cantidad de Alumnos</th>
					<th>Promedio de notas</th>
				</tr>
			</thead>
			<tbody>
				{materias.map(materia => (
					<tr key={materia.id}>
						<td>{materia.description}</td>
						<td>{chart[materia.value].cantidadAlumnos}</td>
						<td>{chart[materia.value].sumaNotas / chart[materia.value].cantidadAlumnos || 0}</td>
					</tr>	
				))}
			</tbody>
		</table>
	)
}
