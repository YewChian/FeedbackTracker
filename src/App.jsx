import { useState } from 'react'
import './App.css'

function App() {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [total, setTotal] = useState(0)
	const incrementGood = () => {
		setGood(good+1)
		setTotal(good + neutral + bad + 1)
	}
	const incrementNeutral = () => {
		setNeutral(neutral+1)
		setTotal(good + neutral + bad + 1)
	}
	const incrementBad = () => {
		setBad(bad+1)
		setTotal(good + neutral + bad + 1)
	}
	return (
		<div>
			<h1 className='bar'>Give Feedback</h1>
			<button onClick={incrementGood}>GOOD</button>
			<button onClick={incrementNeutral}>NEUTRAL</button>
			<button onClick={incrementBad}>BAD</button>
			<Statistics good={good} bad={bad} neutral={neutral} total={total} />
		</div>
	)
}

function Statistics(props) {
	if (props.total > 0) {
		return (
			<div>
				<h1>Statistics</h1>
				<p>Good: {props.good}</p>
				<p>Neutral: {props.neutral}</p>
				<p>Bad: {props.bad}</p>
				<p>Total: {props.total}</p>
				<p>Average: {(props.good - props.bad)/props.total}</p>
				<p>Positive Feedback Percentage: {props.good/props.total*100}%</p>
			</div>
		)
	}
	return (
		<p>Collected stats are displayed here</p>
	)
}


export default App
