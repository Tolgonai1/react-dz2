import styles from './Products.module.css'
import React, {useState} from "react";


function Products(props){
    const  [count,setCount] =useState(0)
    function handleDecrement(){
        if(count === 0) return count
        return setCount((prev) => prev - 1)
    }
    function handleIncrement(){
        setCount((prev) => prev + 1)
    }
    function handleReset(){
        setCount(props.productAmount)
    }
    return <div className={styles.products}>
                <p className={styles.text}>{props.productName}</p>
                <h3>{props.productPrice}</h3>
             <div className={styles.counter}>
                <button onClick={handleDecrement}>-</button>
                 <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleReset}>reset</button>
            </div>
        </div>

}

export default Products