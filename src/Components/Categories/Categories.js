import styles from './/Categories.module.css'

const Categories = () => {
    return ( 

    <div>      
        <center> <button className={styles.button}>Pizzas</button>
        <button className={styles.button}> Milanesas</button>
        <button className={styles.button}>Hamburguesas</button>
        <button className={styles.button}>Empanadas</button>
        <button className={styles.button}>Menus del dia</button>
        </center>
    </div>

)
}

export default Categories