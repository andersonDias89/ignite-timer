import { Play } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { differenceInSeconds } from 'date-fns'
import {
  FormContainer,
  HomeContainer,
  InputMinutesAmount,
  InputNameTask,
  TimerContainer,
} from './styles'
import { useState, useEffect } from 'react'

interface Cycle {
  id: string
  task: string
  duration: number
  startDate: Date
}

const newFormValitaded = zod.object({
  task: zod.string().min(1, 'Esse campo é obrigatório'),
  duration: zod
    .number()
    .min(5, 'Esse campo requer no mínumo 5 minutos')
    .max(60, 'Esse campo requer no máximo 60 minutos'),
})

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<Cycle>({
    resolver: zodResolver(newFormValitaded),
    defaultValues: {
      task: '',
      duration: 0,
    },
  })

  const [cycles, setCycles] = useState<Cycle[]>([])
  const [isActiveCycleId, setIsActiveCycleId] = useState<String | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  function handleSubmitTask(data: Cycle) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      duration: data.duration,
      startDate: new Date(),
    }
    setCycles((state) => [...state, newCycle])
    setIsActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === isActiveCycleId)

  const totalSeconds = activeCycle ? activeCycle.duration * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  console.log(activeCycle)

  const task = watch('task')
  const duration = watch('duration')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      })
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${activeCycle.task} - ${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleSubmitTask)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em:</label>
          <InputNameTask
            type="text"
            name="task"
            placeholder="Dê um nome para o seu projeto"
            {...register('task', { required: true })}
          />

          <label htmlFor="duration">Durante:</label>
          <InputMinutesAmount
            max={60}
            min={0}
            name="duration"
            type="number"
            {...register('duration', { valueAsNumber: true, required: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <TimerContainer>
          <span className="number">{minutes[0]}</span>
          <span className="number">{minutes[1]}</span>
          <span>:</span>
          <span className="number">{seconds[0]}</span>
          <span className="number">{seconds[1]}</span>
        </TimerContainer>

        <button disabled={!task && !duration} type="submit">
          <Play weight="bold" size={20} />
          <span>Começar</span>
        </button>
      </form>
    </HomeContainer>
  )
}
