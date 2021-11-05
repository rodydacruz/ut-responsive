import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
const Navbar = () => {

    return(
        <div>
            <Button className={styles.nb}>Oferta</Button>
            <a>Oferta</a>
            <a>Unitel PRO</a>
            <a>Unitel Tmais</a>
            <a>Cliente +</a>
            <a>Casa +</a>
            <a>Univel Web</a>
            <a>Casa +TV</a>
        </div>
    );
    
}
export default Navbar;

