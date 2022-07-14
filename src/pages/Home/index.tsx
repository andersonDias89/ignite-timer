import { Play } from 'phosphor-react'
import {
  FormContainer,
  HomeContainer,
  InputMinutesAmount,
  InputNameTask,
  TimerContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="projectName">Vou trabalhar em:</label>
          <InputNameTask
            id="projectName"
            type="text"
            placeholder="Dê um nome para o seu projeto"
          />

          <label htmlFor="duration">Durante:</label>
          <InputMinutesAmount
            step={5}
            max={60}
            min={0}
            id="duration"
            type="number"
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

        <button disabled type="submit">
          <Play weight="bold" size={20} />
          <span>Começar</span>
        </button>
      </form>
    </HomeContainer>
  )
}
