import React from "react";
import styles from "./modules/cards.module.css"

function Cards({data}){
    return(
        <div className={styles.card}>
            <img className={styles.img} src={data.image} alt="image_1"/>
            <h3 className={styles.title}>{data.title}</h3>
            <p className={styles.content}>{data.description}</p>
            <a href={data.link} className={styles.btn}>View project</a>
        </div>
    )
}

export default Cards;