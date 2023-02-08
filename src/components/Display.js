import React, { useState } from 'react'
import './Display.css'
const Display = () => {
    const [output, setOutput] = useState("");

      const onClickHandler =(e) =>{
        setOutput(output.concat(e.target.name));
      }

      const clear = () =>{
setOutput("")
      }
      const backspace = () =>{
setOutput(output.slice(0,-1));
      }
      const calculate = () =>{
        setOutput(eval(output).toString());
      }
    return (
        <>
            <div class="container">
                <form>
                    <input type="text" value={output} name="" id="" />
                </form>

                <div class="keypad">
                    <button className='highlight' onClick ={clear} id="clear">Clear</button>
                    <button className='highlight' onClick ={backspace} id="backspace">C</button>
                    <button className='highlight' name='/' onClick ={onClickHandler}>/
                    </button>
                    <button name='7' onClick ={onClickHandler}>7</button>
                    <button name='8' onClick ={onClickHandler}>8</button>
                    <button name='9' onClick ={onClickHandler}>9</button>
                    <button className='highlight' name='*' onClick ={onClickHandler}>*</button>
                    <button name='4' onClick ={onClickHandler}>4</button>
                    <button name='5' onClick ={onClickHandler}>5</button>
                    <button name='6' onClick ={onClickHandler}>6</button>
                    <button className='highlight' name='-' onClick ={onClickHandler}>&ndash;</button>
                    <button name='1' onClick ={onClickHandler}>1</button>
                    <button name='2' onClick ={onClickHandler}>2</button>
                    <button name='3' onClick ={onClickHandler}>3</button>
                    <button className='highlight' name='+' onClick ={onClickHandler}>+</button>
                    <button name='0' onClick ={onClickHandler}>0</button>
                    <button name='.' onClick ={onClickHandler}>.</button>
                    <button className='highlight' onClick ={calculate} id="GrandSum">=</button>




                </div>

            </div>



        </>
    )
}

export default Display