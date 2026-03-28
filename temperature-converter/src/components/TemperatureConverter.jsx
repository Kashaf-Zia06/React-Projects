import { useState, useEffect } from 'react'

function TemperatureConverter() {

  // State to store the user input temperature
  const [temp, setTemp] = useState("")
  
  // State to store the converted result
  const [result, setResult] = useState("")
  
  //  State to store conversion history
  const [history, setHistory] = useState([])

  // Load conversion history from localStorage when the page loads
  useEffect(() => {
    const data = localStorage.getItem("history")  // get data from localStorage
    if (data) {
      setHistory(JSON.parse(data))  // convert JSON string to array and set history
    }
  }, []) // empty dependency array → run only once on mount

  //  Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history))
  }, [history]) // run every time history changes

  //  Convert Celsius → Fahrenheit
  function convertToF() {
    if (temp === "") return alert("Enter value") // validate empty input

    let f = (temp * 9/5) + 32  // conversion formula
    setResult(f.toFixed(2) + " °F")  // update result state

    // update history with the new conversion
    setHistory([...history, temp + " °C → " + f.toFixed(2) + " °F"])
  }

  //  Convert Fahrenheit → Celsius
  function convertToC() {
    if (temp === "") return alert("Enter value") // validate empty input

    let c = (temp - 32) * 5/9  // conversion formula
    setResult(c.toFixed(2) + " °C")  // update result state

    // update history with the new conversion
    setHistory([...history, temp + " °F → " + c.toFixed(2) + " °C"])
  }

  return (
    <div className="box">
      <h2>Temperature Converter</h2>

      {/*  Input field for entering temperature */}
      <input
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        placeholder="Enter temperature"
      />

      <br /><br />

      {/*  Buttons for conversion */}
      <button onClick={convertToF}>C → F</button>
      <button onClick={convertToC}>F → C</button>

      {/*  Display conversion result */}
      <p>Result: {result}</p>

      <h3>History</h3>

      {/*  Display conversion history */}
      {history.length === 0 ? (
        <p>No history yet</p> // if history is empty
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li> // display each history item
          ))}
        </ul>
      )}
    </div>
  )
}

export default TemperatureConverter