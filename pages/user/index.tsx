import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import allActions from '../../redux/actions';
import { User } from '../../interfaces/User';

const UserView = (): JSX.Element => {
    const [user, setUser] = useState<User>();
    const users = useSelector<any>(state => state.usersReducer.users);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const { id } = router.query;
        const foundUser = (users as User[]).find((user) => user.id === id);
        if (foundUser) {
            setUser(foundUser)
        }
    }, [users]);

    const userStateHandler = (userID: string | undefined): void => {
        dispatch(allActions.usersActions.toggleUser(userID));
    };

    const userDeleteHandler = (userID: string | undefined): void => {
        dispatch(allActions.usersActions.deleteUser(userID));
        router.push('/');
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>User: {user?.name}</h1>
                    <h3>Title: {user?.title}</h3>
                    <h4>Status: {user?.active ? "Active" : "Not Active"}</h4>
                    <h6>Description:</h6>
                    <p>{user?.info}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button type="button" className={`btn ${user?.active ? "btn-outline-secondary" : "btn-outline-primary"}`} onClick={() => userStateHandler(user?.id)}>
                        {user?.active ? "Deactivate" : "Activate"}
                    </button>
                    <button type="button" className="btn btn-danger mx-3" onClick={() => userDeleteHandler(user?.id)}>
                        Delete
                    </button>
                </Col>
            </Row>
        </Container>
    )
};

export default UserView;