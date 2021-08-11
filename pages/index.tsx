import { useRouter } from 'next/router';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { User } from '../interfaces/User';
import { useAppSelector } from '../redux/store';

const Home = (): JSX.Element => {
  const router = useRouter();
  const users: User[] = useAppSelector((state: any) => state.usersReducer.users);
  return (
    <Container className="mt-4">
      {
        users.length > 0 && (
          (users as User[]).map((user, index) => (
            <Row key={index}>
              <Col className="mt-2" style={{ border: `3px solid ${user.active ? 'green' : 'red'}`, borderRadius: '1rem' }}>
                <button className="btn w-100" onClick={() => router.push({
                  pathname: '/user',
                  query: { id: user.id },
                })}>
                  <h3>Name: {user.name}</h3>
                  <h6>Title: {user.title}</h6>
                </button>
              </Col>
            </Row>
          ))
        )
      }
    </Container>
  )
};

export default Home;
