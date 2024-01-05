import {useState} from 'react';

export default function Multiplication(){
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [result, setResult] = useState(0);

    function changeResult(event) {
        
        const newValue = Number(event.target.value);
        if(event.target.name == "firstNumber") {
            setInput1(newValue);
            setResult(newValue * input2);

        }
        else {
            setInput2(newValue);
            setResult(input1 * newValue);
        }
        
    };
    
    return (
        <p>
        <input name="firstNumber" onChange={changeResult} /> * <input name="secondNumber" onChange={changeResult} /> = {result}
        </p>
    )
    
}