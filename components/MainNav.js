import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

export default function MainNav() {
  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-dark">
        <Container>
          <Navbar.Brand><strong>Muskaan Mahajan</strong></Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Listings</Nav.Link>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
