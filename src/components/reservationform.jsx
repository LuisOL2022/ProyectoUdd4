import { React, useState, useRef } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './reservationform.css'

export function ReservationForm() {
  const [Nombre, setNombre] = useState('');
  const [Fecha, setFecha] = useState('');
  const [Hora, setHora] = useState('');
  const [Correo, setCorreo] = useState('');
  const refNombre = useRef(null);
  const refFecha = useRef(null);
  const refHora = useRef(null);
  const refCorreo = useRef(null);

  const agregarReserva = async () => {
    if (Nombre !== '' && Fecha !== '' && Hora !== '' && Correo !== '') {
      const { id } = await addDoc(collection(db, 'reservas'), {
        Nombre: Nombre,
        Fecha: Fecha,
        Hora: Hora,
        Correo: Correo
      });

      if (id !== '') {
        alert('¡Reserva guardada con éxito!');
        setNombre('');
        setFecha('');
        setHora('');
        setCorreo('');
      } else {
        alert('Error: no se pudo reservar');
      }
    } else {
      alert('Debes llenar todos los campos');
    }
    refNombre.current.focus();
  };

  return (

    <div className="content">
      <div className="form">
        <h2>Reservaciones</h2>
        <form className="form-container">
          <div className="form-item col-5">
            <input
              className="input"
              type="text"
              required="required"
              id="Nombre"
              ref={refNombre}
              value={Nombre}
              onChange={(event) => {
                setNombre(event.target.value);
              }}
              placeholder="Ingresa tu nombre"
              autoFocus
            />
            <label className="label" htmlFor="titulo">
              
            </label>
          </div>
          <div className="form-item col-5">
            <input
              className="input"
              type="text"
              required="required"
              id="Fecha"
              ref={refFecha}
              value={Fecha}
              onChange={(event) => {
                setFecha(event.target.value);
              }}
              placeholder="Indica la fecha"
            />
            <label className="label" htmlFor="Fecha">
              
            </label>
          </div>
          <div className="form-item col-5">
            <input
              className="input"
              type="time"
              required="required"
              id="Hora"
              ref={refHora}
              value={Hora}
              onChange={(event) => {
                setHora(event.target.value);
              }}
              placeholder="Indica la hora"
            />
            <label className="label" htmlFor="Hora">
              
            </label>
          </div>
          <div className="form-item">
            <input
              className="input"
              type="text"
              required="required"
              id="Correo"
              ref={refCorreo}
              value={Correo}
              onChange={(event) => {
                setCorreo(event.target.value);
              }}
              placeholder="Ingresa tu correo"
            />
            <label className="label" htmlFor="Correo">
              
            </label>
          </div>
          <div className="form-item">
            <input className="btn-enviar" type="button" value="Agregar" onClick={agregarReserva} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;

