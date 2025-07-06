import {useState} from 'react'
function Sahil(){
    let [counter,setCounter] = useState(0)
    // the code below wont work
    // document.getElementById('increase').addEventListener('click',()=>{
    //     setCounter(counter+1)
    //     console.log("value increased")
    // })
    const increaseValue = ()=>{
        if(counter<20){
            setCounter(counter+1)
            console.log("value increased")
        }
        else{
            console.log("max value is 20")
        }
    }
    const decreaseValue = ()=>{
        setCounter(counter >0?counter-1:counter)
    }
    return(
        <>
        <h1>
            USE STATE HOOK 
        </h1>
        <div>
            Value of counter: {counter}
        </div>
        <button id="increase" onClick={increaseValue}>Increase</button>
        <button id="decrease" onClick={decreaseValue}>Decrease</button>
        </>
    )
    
}
export default Sahil