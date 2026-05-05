import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../css/Proyects.module.css"
import adoptaImg from "../assets/proyectarbol.png"
import hugExpress from "../assets/proyectpersonas.png"
import vitalink from "../assets/proyectcase.png"
import pasteleria from "../assets/proyectpasteleria.png"

const Proyects=()=>{
    const projects= [
        {
            title: "Pagina web VITALINK",
            image: vitalink,
            description: "Proyecto grupal de desarrollo web sobre primeros auxilios presentado a empresas de la red de la Fundacion Forge. Me trabajo fue la gestión de la base de datos de cada caso de emergencia mediante Postman; el diseño y maquetado de las cards en la página principal y la creación de vistas individuales interactivas para cada caso, garantizando una experiencia de usuario sencilla y de facil acceso y un diseño visual consistente.",
            github: "https://github.com/LuzMendozaAlcantara/Vitalink",
            demo: "https://grupo4-proyecto-final-client.vercel.app/"
        },
        {
            title: "Rosa Bakery",
            image: pasteleria,
            description: "Desarrollé una página web dinámica y atractiva para un emprendimiento real de pastelería. El objetivo principal fue crear una experiencia súper amigable para que los clientes pudieran tentarse con los postres y armar su pedido de forma rápida y sencilla, sin que la página se trabe o tenga que recargar. ",
            github:"https://github.com/LuzMendozaAlcantara/RosaBakery",
            demo: "https://rosa-bakery.vercel.app/"
        },
        {
            title: "Hug Express",
            image: hugExpress,
            description: "Desarrolle una interfaz web llamada Hug Express, una plataforma simulada para enviar abrazos a amigos y familiares. El proyecto incluia: listado dinamico de amigos con informacion personalizada, boton funcional de 'Enviar abrazo' que incrementa el contador de abrazos por usuario, implementacion de alertas interactivas, simulacion de gestion de cookies, incluyendo mensaje de consentimiento y boton para aceptar. Es un diseño estructurado tipo wireframe enfocado en experiencia del usuario.",
            github: "https://github.com/LuzMendozaAlcantara/HugExpress",
            demo: "https://hug-express.vercel.app/#"
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