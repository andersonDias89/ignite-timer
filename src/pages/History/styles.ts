import styled from 'styled-components'

export const HistoryContainer = styled.div`
  width: 100%;
  max-height: 300px;
  margin-top: 1rem;

  h2 {
    margin-bottom: 1rem;
    padding: 0 1rem;
  }
`

export const HistoryList = styled.div`
  overflow: auto;
  max-height: 400px;
  padding: 0.25rem;

  table {
    width: 100%;
    min-width: 600px;

    th {
      text-align: left;
      padding: 1rem;
      background-color: ${(props) => props.theme['gray-600']};
      border-collapse: collapse;

      &:first-child {
        border-radius: 10px 0 0 0;
      }

      &:last-child {
        border-radius: 0 10px 0 0;
      }
    }

    td {
      text-align: left;
      padding: 1rem;
      background-color: ${(props) => props.theme['gray-700']};
      border-collapse: collapse;

      &:first-child {
        width: 45%;
      }
    }
  }
`

const STATUS_COLOR = {
  green: 'green-500',
  red: 'red-500',
  yellow: 'yellow-500',
} as const

interface StatusColor {
  statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.div<StatusColor>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${(props) =>
      props.theme[STATUS_COLOR[props.statusColor]]};
    border-radius: 50%;
  }
`
