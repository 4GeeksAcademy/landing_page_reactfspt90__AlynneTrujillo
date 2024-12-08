import React from 'react';

const Cards = ({ image, title, description }) => {
    return (
        <div className="card h-100 d-flex flex-column" style={{ width: '18rem' }}>
            <img src={image}className="card-img-top" style={{ height: '300px', objectFit: 'cover'}}/>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="mt-auto d-flex justify-content-center">
                    <button className="btn btn-primary">Click here!</button>
                </div>
            </div>
        </div>
    );
};
export default Cards;
