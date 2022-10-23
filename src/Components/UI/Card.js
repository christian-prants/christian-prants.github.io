import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img variant="top" src={props.imgPath} alt="card-img" />
      <div className={classes.items}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>

        <div className={classes.links}>
        <div className={classes.icons}>
            <a href={props.linkGHProject} target="_blank" rel="noopener noreferrer">
                <FaEye/>
            </a>
        </div>
        <div className={classes.icons}>
            <a href={props.linkGHPage} target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Card;