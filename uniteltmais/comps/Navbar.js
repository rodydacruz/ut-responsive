import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button'
import BImage from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {List} from 'react-bootstrap-icons'

const Navbar = () => {

    return(
        <Container ><Row className={styles.navbar}> <div >
            
            <Button variant="flat" className={styles.nb}>+ OFERTA</Button>
            <Button variant="flat" className={styles.nb}>UNITEL PRO +</Button>
            <Button variant="flat" className={styles.nb}>Unitel Tmais</Button>
            <Button variant="flat" className={styles.nb}><BImage src="Logo-Cliente copy.png" /></Button>
            <Button variant="flat" className={styles.nb}><BImage src="logo-casa+.png" /></Button>
            <Button variant="flat" className={styles.nb}><BImage src="Logo-Cliente copy.png" /></Button>
            <Button variant="flat" className={styles.nb}><BImage src="Botton_Menu4.png" /></Button>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            </div></Row>
       
            <Row className={styles.navbar}>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col><List size="4em"/></Col>
            </Row>
            </Container>
    );
    
}
export default Navbar;

