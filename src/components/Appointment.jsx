const Appointment = (props) => {
  return (
    <li className={props.appointment.done ? 'done' : ''}>
      <div class="flex space-x-4 items-center">
        <input
          type="checkbox"
          id={`appointment-${props.appointment.id}`}
          onChange={() => props.toggleDone(props.appointment.id)}
          checked={props.appointment.done}
        />
        <label htmlFor="{`appointment-${props.appointment.id`}">
          {props.appointment.name}
        </label>
        <div class="grid justify-items-center">
          <button
            class="rounded-none bg-cyan-600 p-1 m-1 hover:bg-red-700 transition-opacity"
            onClick={() => props.removeAppointment(props.appointment.id)}
          >
            Remover
          </button>
        </div>
      </div>
    </li>
  )
}

export default Appointment
