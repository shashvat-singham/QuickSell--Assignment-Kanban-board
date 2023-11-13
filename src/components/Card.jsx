import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import "../styles/Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const dotStyle = {
    color: 'silver', // Silver color
    fontSize: '1em', // Adjust the size as needed
    marginTop: '-3em', 
  };

const Card = ({ id, title, tags, status }) => {
  return (
    <div className="container">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
        <span style={{ textTransform: "uppercase", color: "darkgrey" }}>
          {id}
        </span>

        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="User Name"
          />

          <div className="status"></div>
        </div>
      </div>

      <div className="title">
        <p>{title}</p>
      </div>

      <div className="tags">
        <div className="tag">
          <BsExclamationSquareFill />
        </div>
        {tags?.map((element, index) => {
          return (
            <div key={index} className="tag">
              <span><FontAwesomeIcon icon={faCircle} style={dotStyle} /></span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
