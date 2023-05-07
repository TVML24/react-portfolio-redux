import React from 'react';
import '../styles/cards.css';

export default function Card(props) {
    console.log(props);
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
            <img src= {process.env.PUBLIC_URL + `/assets/images/${props.img}`} alt="Card cap"/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Repo: <a href= {props.repo}>View it Here</a></p>
          <p className="card-text">Deployment: <a href={props.deploy}>View it Here</a></p>
        </div>
      </div>
    </div>
  );
}
