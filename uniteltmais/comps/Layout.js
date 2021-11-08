import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "./Footer";
import Header from "./Header";


const Layout = ({children}) => {
    return(
        <Container>
            <Row xs={12} md={10} lg={8} >
            
            <Header />
            {children}
            <Footer />
            </Row>
            </Container>
    );    
}
export default Layout;
