import React from 'react'

export default function Confirmation({ information }) {
  return (
    
      <div>
        <h3>Order confirmation ! </h3>
        <p>Customer Name : {information.username}</p>
        <p>Address:{information.address}</p>
        <p>Pizza size:{information.size}</p>
        <p>Special request: {information.special}</p>
        {!!information.topping && !!information.topping.length && (
          <div>
            Toppings:
            <ul>
              {information.topping.map((like, idx) => (
                <li key={idx}>{like}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    
  );
}


