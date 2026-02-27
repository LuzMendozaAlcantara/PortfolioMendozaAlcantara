import {Link} from 'react-router-dom'
import styles from "../css/Home.module.css"

const Home= ()=>{
    return (
        <>
            <div>
                <h1>Luz Milagros Mendoza Alcantara</h1>
                <h2>Frontend Developer</h2>
                <p>Desarrolladora Frontend con formación en React y bases sólidas en HTML, CSS y JavaScript. Me destaco por la prolijidad del código, la capacidad de aprendizaje y el compromiso con las buenas prácticas. Me interesa desarrollarme profesionalmente en equipos donde pueda seguir mejorando mis habilidades técnicas.</p>
            </div>
            <div>
                <Link to="/proyects" className={styles.button}>Ver Proyectos</Link>
            </div>
        </>
    )
}

export default Home;