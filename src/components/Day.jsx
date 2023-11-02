import { useState } from 'react'
import Appointment from './Appointment'

const Day = (props) => {
  const [appointments, setAppointments] = useState([])

  const AddAppointment = () => {
    const name = prompt('Informe o nome do compromisso:')
    const newAppointment = {
      id: Math.floor(1000000 * (Math.random() + 1)), //gera um id aleatório
      name,
      done: false
    }
    setAppointments((currentState) => [...currentState, newAppointment])
  }

  const toggleDone = (appointmentId) => {
    setAppointments((currentState) =>
      currentState.map((appointment) => {
        if (appointment.id !== appointmentId) return appointment
        else return { ...appointment, done: !appointment.done }
      })
    )
  }

  const removeAppointment = (appointmentId) => {
    setAppointments((currentState) =>
      currentState.filter((appointment) => appointment.id !== appointmentId)
    )
  }

  return (
    <div className="day">
      <h2 class="underline">{props.day}</h2>
      <ul>
        {appointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            toggleDone={toggleDone}
            removeAppointment={removeAppointment}
          />
        ))}
      </ul>

      <button
        class="rounded-none bg-slate-500 p-1 mt-4 hover:bg-yellow-500 transition-opacity"
        onClick={AddAppointment}
      >
        Adicionar
      </button>
    </div>
  )
}

export default Day
