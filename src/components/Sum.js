import React from 'react';

{/*function Sum( {firstNumber, secondNumber} ) {
  return (
   <h1>{firstNumber + secondNumber}</h1>
  )
}*/}

const Sum = ({ x, y }) => {
  // const { x, y } = props;

   return (
  <h1>
    Sum of {x} and {y} is {x + y}!
  </h1>
   );
}

export default Sum;
