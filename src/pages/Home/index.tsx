import { Play } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  FormContainer,
  HomeContainer,
  InputMinutesAmount,
  InputNameTask,
  TimerContainer,
} from './styles'

import { useForm } from 'react-hook-form'

const newFormValitaded = zod.object({
  task: zod.string().min(1, 'Esse campo é obrigatório'),
  duration: zod
    .number()
    .min(5, 'Esse campo requer no mínumo 5 minutos')
    .max(60, 'Esse campo requer no máximo 60 minutos'),
})

export function Home() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newFormValitaded),
  })

  function handleSubmitTask(data) {
    console.log(data)
  }

  const task = watch('task')
  const duration = watch('duration')

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
          <span className="number">0</span>
          <span className="number">0</span>
          <span>:</span>
          <span className="number">0</span>
          <span className="number">0</span>
        </TimerContainer>

        <button disabled={!task && !duration} type="submit">
          <Play weight="bold" size={20} />
          <span>Começar</span>
        </button>
      </form>
    </HomeContainer>
  )
}
