import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Links from "./Links";

const Footer = () => {

    return(
        <Container>
            <Row xs={12} md={10} lg={8}>
                <Col>
                    <Links />
                </Col>
            </Row>
            <Row xs={12} md={10} lg={8}>
                <Col>PLANOS TARIFÁRIOS</Col>
                <Col>SERVIÇOS</Col>
                <Col>PRODUTOS</Col>
                <Col>UNITEL T+</Col>
            </Row>
            <Row >
                <Col>
                UNITELT+ PLAY
                TARIFÁRIO CLÁSSICO
                TARIFÁRIO PRESTIGIO
                TARIFÁRIO EMPRESA
                TARIFÁRIO LIBERTY
                FIXO +
                </Col>
                <Col>
                SERVIÇOS ADICIONAIS
                SERVIÇOS DE SMS
                RECARGA ONLINE
                RECARREGAMENTOS
                T+ FAMILY
                ROAMING
                PORTABILIDADE
                MEGAS LIVRES
                </Col>
                <Col>
                TELEMÓVEIS E SMARTPHONES
                PLACAS 3G E ROUTERS
                TABLETES E PORTATEIS
                TELEFONES
                </Col>
                <Col>
                QUEM SOMOS
                LOJAS
                PROMOÇOES
                REVISTA UNITE T+
                RECRUTAMENTO
                VIDEOS UNITELT+
                CONTACTE-NOS
                </Col>
            </Row>
        </Container>
    );
    
}
export default Footer;

