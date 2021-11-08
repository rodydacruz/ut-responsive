import Head from 'next/head'
import Image from 'next/image'
import Carousels from '../comps/Carousels'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
  return (
    <Container >
      <Row xs={12} md={10} lg={8}>
    <Col>
    
      <Head>
        <title>MyUnitel T+</title>
        <meta name="description" content="Unitel T+ next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Carousels />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      </Col>
    </Row>
    </Container>
  )
}
