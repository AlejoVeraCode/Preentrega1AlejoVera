import CartWidget from "../CartWidget/CartWidget"
import Logo from "./Logo"
import styles from './/Navbar.module.css'

const Navbar = () =>{
    return (
        <div className= {styles.navbar}> <nav >
           <Logo/>  
           <div className= {styles.ul}>
                 <button className={styles.button}> Sobre nosotros</button>
                 <button className={styles.button}>Eventos</button>
                 <button className={styles.button}>Contacto</button>
            </div>
            <CartWidget/>
        </nav></div>
    )

}

export default Navbar