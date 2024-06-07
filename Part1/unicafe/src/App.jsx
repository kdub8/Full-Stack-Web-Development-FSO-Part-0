/* eslint-disable react/prop-types */
import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => {

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const DisplayPercentSign = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} %</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text='good' value={good} />
        <StatisticsLine text='neutral' value={neutral} />
        <StatisticsLine text='bad' value={bad} />
        <StatisticsLine text='all' value={good + bad + neutral} />
        <StatisticsLine text='average' value={(good * 1 + bad * (-1)) / (good + bad + neutral)} />
        <DisplayPercentSign text='positive' value={(good / (good + bad + neutral) * 100)} />
      </tbody>
    </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (

    <div>
      <Header text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App