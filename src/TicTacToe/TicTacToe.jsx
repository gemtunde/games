import React,{useState} from 'react';
import './TicTacToe.css'

const TicTacToe = () => {
    const [turn, setTurn] = useState('x');
    const [cells, setCells] = useState(Array(9).fill(''));

    const handleClick = (number) => {
        let squares = [...cells]
                
        if (turn === 'x'){
            squares[number] = 'x';
             setTurn('o');
           }
           else{
              squares[number] = 'o';
            setTurn('x')
           }
           console.log(squares)
        
    }

    const Cell = ({num}) => {

        return(
            <td onClick={()=>handleClick(num)}>--</td>
        )
    }
  return (
    <div className='container'>
         <h1>Simple TicTacToe Game</h1>
        <table>
            {turn}
            <tbody>
                <tr>
                     <Cell num={0} /> 
                     <Cell num={1}/> 
                     <Cell num={2}/> 
                </tr>
                <tr>
                     <Cell num={3}/> 
                     <Cell num={4}/> 
                     <Cell num={5}/> 
                </tr>
                <tr>
                     <Cell num={6}/> 
                     <Cell num={7}/> 
                     <Cell num={8}/> 
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TicTacToe