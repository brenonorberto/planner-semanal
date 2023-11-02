import Day from './components/Day'
import './style.css'

const week = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado'
]

function App() {
  return (
    <main>
      <div class="whitespace-normal mb-4">
        <h1 class="text-sky-400 text-lg font-serif font-bold mt-4 flex justify-center">
          Planner Semanal
        </h1>
      </div>

      <div class="grid grid-rows-4 grid-flow-col gap-4">
        {week.map((day) => (
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Day key={day} day={day} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
