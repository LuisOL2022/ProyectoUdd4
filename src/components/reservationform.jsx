import React, { useState } from 'react';
import Input from './input';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se puede enviar la información de la reserva a una API o a una base de datos.
    console.log('Reserva realizada:', { name, email, date, time });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        label="Nombre" 
        type="text" 
        name="name" 
        value={name} 
        onChange={(event) => setName(event.target.value)} 
      />
      <Input 
        label="Correo electrónico" 
        type="email" 
        name="email" 
        value={email} 
        onChange={(event) => setEmail(event.target.value)} 
      />
      <Input 
        label="Fecha" 
        type="date" 
        name="date" 
        value={date} 
        onChange={(event) => setDate(event.target.value)} 
      />
      <Input 
        label="Hora" 
        type="time" 
        name="time" 
        value={time} 
        onChange={(event) => setTime(event.target.value)} 
      />
      <button type="submit" className="btn btn-primary">Reservar</button>
    </form>
  );
};

export default ReservationForm
