import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Links from "./Links";

const Footer = () => {

    return(
        <Container className={styles.footer}>
            <Row style ={{padding:"10rem"}}>
            <Row xs={12} md={10} lg={8} >
                <Col>
                    <Links/>
                </Col>
            </Row>
            <Row xs={12} md={10} lg={8}>
                <Col className={styles.footerc}>
                <Row className={styles.footert}>PLANOS TARIFÁRIOS</Row>
                <Row>
                    UNITELT+ PLAY
                TARIFÁRIO CLÁSSICO
                TARIFÁRIO PRESTIGIO
                TARIFÁRIO EMPRESA
                TARIFÁRIO LIBERTY
                FIXO +
                </Row>

                </Col>

                <Col className={styles.footerc}>
                <Row className={styles.footert}>SERVIÇOS</Row>
                <Row>
                SERVIÇOS ADICIONAIS
                SERVIÇOS DE SMS
                RECARGA ONLINE
                RECARREGAMENTOS
                T+ FAMILY
                ROAMING
                PORTABILIDADE
                MEGAS LIVRES
                </Row>
                </Col>
                <Col className={styles.footerc}>
                <Row className={styles.footert}>PRODUTOS</Row>
                <Row> TELEMÓVEIS E SMARTPHONES
                PLACAS 3G E ROUTERS
                TABLETES E PORTATEIS
                TELEFONES</Row>
                </Col>
                <Col className={styles.footerc}>
                <Row className={styles.footert}>UNITEL T+</Row>
                <Row>
                <p><Link href="/"><a>QUEM SOMOS</a></Link></p>
                <p>LOJAS</p>
                <p>PROMOÇOES</p>
                <p>REVISTA UNITE T+</p>
                <p>RECRUTAMENTO</p>
                <p>VIDEOS UNITELT+</p>
                <p>CONTACTE-NOS</p>
                
                </Row>
                </Col>
            </Row>
            </Row>
            
        </Container>
    );
    
}
export default Footer;

