import React from 'react';

const Card = (props) => {
    const { name, email, id} = props;  // destructuring 
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/robo1/${id}`} /> {/* ES6 template strings*/}  
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;