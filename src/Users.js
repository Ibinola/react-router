import React from 'react';
import './App.css'
import { Link, Outlet, useParams } from 'react-router-dom';

export default function User({ users }) {
    const { userId } = useParams();

    return (
        <div className='App'>
            <h1>User : {userId}</h1>

            <Link to="/users">Back to Users</Link>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={user.id}>
                            {user.fullName}
                        </Link>
                    </li>
                ))}
            </ul>


            <nav>
                <Link className="link" to="profile">Profile</Link>
                <Link className="link" to="account">Account</Link>
            </nav>

            <Outlet />
        </div>
    )
}
