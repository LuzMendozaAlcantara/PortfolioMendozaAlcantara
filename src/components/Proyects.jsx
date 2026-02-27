import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../css/Proyects.module.css"
import adoptaImg from "../assets/proyectarbol.png"
import hugExpress from "../assets/proyectpersonas.png"
import vitalink from "../assets/proyectcase.png"

const Proyects=()=>{
    const projects= [
        {
            title: "Adopta Tu Arbol",
            image: adoptaImg,
            description: "Proyecto academico frontend que representa una plataforma de adopción de árboles. Implementa funcionalidades interactivas como filtrado por tipo de árbol, cambio de estado al adoptar, y simulación de donaciones con mensajes de confirmación. El objetivo fue practicar manipulación del DOM, eventos y lógica en JavaScript, junto con una estructura visual clara y responsive.",
            github: "https://github.com/LuzMendozaAlcantara/AdoptaTuArbol_.git",
            demo: "https://adopta-tu-arbol-1lwz.vercel.app/"
        },
        {
            title: "Hug Express",
            image: hugExpress,
            description: "Desarrolle una interfaz web llamada Hug Express, una plataforma simulada para enviar abrazos a amigos y familiares. El proyecto incluia: listado dinamico de amigos con informacion personalizada, boton funcional de 'Enviar abrazo' que incrementa el contador de abrazos por usuario, implementacion de alertas interactivas, simulacion de gestion de cookies, incluyendo mensaje de consentimiento y boton para aceptar. Es un diseño estructurado tipo wireframe enfocado en experiencia del usuario.",
            github: "https://github.com/LuzMendozaAlcantara/HugExpress",
            demo: "https://hug-express.vercel.app/#"
        },
        {
            title: "Pagina web VITALINK",
            image: vitalink,
            description: "Proyecto academico final grupal de desarrollo web sobre primeros auxilios presentado a empresas de la red de la Fundacion Forge. Me trabajo fue la gestión de la base de datos de cada caso de emergencia mediante Postman; el diseño y maquetado de las cards en la página principal y la creación de vistas individuales interactivas para cada caso, garantizando una experiencia de usuario sencilla y de facil acceso y un diseño visual consistente.",
            github: "https://github.com/LuzMendozaAlcantara/Vitalink",
            demo: "https://grupo4-proyecto-final-client.vercel.app/"
        }
    ];


    return(
        <>
        <div className={styles.container}>
            <h2>Mis proyectos</h2>
        <div>
            <Link to="/" className={styles.button1}>←Volver</Link>
        </div>
        <div>
            {projects.map((project, index)=> (
                <div className={styles.card} key={index}>
                    <h2>{project.title}</h2>
                    <p className={styles.proydescript}>{project.description}</p>
                    <img src={project.image} alt={project.title} />
                    <div className={styles.link1}>
                        <a href={project.github}>Github</a>
                    </div>
                    <div className={styles.link2}>
                        <a href={project.demo}>Demo</a>
                    </div>
                </div>
            ))}
        </div>
        </div>
        </>
    )
}

export default Proyects;