import Head from 'next/head'
import Image from 'next/image'
import BImage from 'react-bootstrap/Image'
import Carousels from '../comps/Carousels'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <Container >
      <Row >
    <Col>
    
      <Head>
        <title>MyUnitel T+</title>
        <meta name="description" content="Unitel T+ next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Carousels />
        <BImage src="Banner_Loja_Destaques.png" style={{width:"100%"}}/>
        
      </main>

      
      </Col>
  
    </Row>
    <Row>
    <Col> <BImage src="Internet-Computador.png" /></Col>
    <Col> <BImage src="Internet-Computador-1.png" /></Col>
    <Col> <BImage src="Roaming_Home.png" /></Col>
    <Col>
      <Row><BImage src="Como-Ser-Cliente.png" /></Row>
      <Row><BImage src="Apoio-ao-cliente360.png" /></Row>
     </Col>
    

    </Row>
    <Row><footer className={styles.footer}>
        <a
          href="http://rodydacruz.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' RodyDaCruz'}
          <span className={styles.logo}>
            <BImage src="/RDC-B.svg" alt="RDC Logo" width={100} height={100} />
          </span>
        </a>
      </footer></Row>
    
    </Container>
  )
}
