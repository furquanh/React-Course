import {useState} from 'react';


export default function Calculator() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [op, setOp] = useState('+')
    const [result, setResult] = useState('')
    
    const options = [
        '+',
        '-',
        '*',
        '/'
    ]

    function changeResult(event) {
        
        console.log(`entered changeResult with ${event.target.name}`)
        
        if (event.target.name == "UserEnteredNum1") {
            const newNum = +event.target.value
            setNum1(newNum)
            if (op == "*") {
                setResult(`Result: ${newNum * num2}`)
            }
            else if (op == "/") {
                setResult(`Result: ${newNum / num2}`)
            }
            else if (op == "-") {
                setResult(`Result: ${newNum - num2}`)
            }
            else if (op == "+") {
                setResult(`Result: ${newNum + num2}`)
            }
        }
       else if (event.target.name == "UserEnteredNum2") {
            const newNum = +event.target.value
            setNum2(newNum)
            if (op == "*") {
                setResult(`Result: ${num1 * newNum}`)
            }
            else if (op == "/") {
                setResult(`Result: ${num1 / newNum}`)
            }
            else if (op == "-") {
                setResult(`Result: ${num1 - newNum}`)
            }
            else if (op == "+") {
                setResult(`Result: ${num1 + newNum}`)
            }
        }
       else if (event.target.name == "ChangedArthemiticOp") {
            if (event.target.value == "*") {
                setOp("*")
                setResult(`Result: ${num1 * num2}`)
            }
            else if (event.target.value == "/") {
                setOp("/")
                setResult(`Result: ${num1 / num2}`)
            }
            else if (event.target.value == "-") {
                setOp("-")
                setResult(`Result: ${num1 - num2}`)
            }
            else if (event.target.value == "+") {
                setOp("+")
                setResult(`Result: ${num1 + num2}`)
            }
        }

    }
    
    return (
        <center onChange={changeResult}>
        <input name="UserEnteredNum1"  />
        <select name="ChangedArthemiticOp" >
        {options.map((option, index) => {
            return (<option key={index}>{option}</option>);
        })}
        </select>
        <input name="UserEnteredNum2" />
        <h3>{result}</h3>
        </center>
    )

}