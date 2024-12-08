import React from 'react';

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-body-tertiary text-start">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora assumenda illo exercitationem commodi blanditiis possimus modi distinctio fugit dignissimos?</p>
                <button className="btn btn-primary btn-lg" type="button">A Call to Action!</button>
            </div>
        </div>
    );
}

export default Jumbotron;