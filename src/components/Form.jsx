import React from 'react';
import styles from './Form.module.css';

export default function Form({materias, setNota, handleSubmit}) {
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.container_input}>
				<select  onChange={(e) => setNota(prev => ({...prev, materia: e.target.value}))}>
					<option selected hidden>
						Seleccione una materia
					</option>
					{ materias.map(materia => (<option key={materia.id} value={materia.value}>{materia.description}</option>))}
				</select>
				<input placeholder='Ingrese una nota' type="number" min={1} max={10} onChange={(e) => setNota(prev => ({...prev, nota: e.target.value}))} />
			</div>
		<input type="submit" value="Guardar" />
		</form>
	)
}
