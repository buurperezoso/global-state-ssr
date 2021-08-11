import * as React from 'react';
import { Container } from 'react-bootstrap';

const Home = ({ name }: { name: string }) => {
    return (
        <Container>
            <h1>Estoy en Home!{name}</h1>
        </Container>
    )
}

export default Home;

export async function getStaticProps() {

    const res = await fetch(`http://localhost:3000/api/hello`);
    const data = await res.json();

    return {
        props: {
            name: data.name
        }, // will be passed to the page component as props
    }
}