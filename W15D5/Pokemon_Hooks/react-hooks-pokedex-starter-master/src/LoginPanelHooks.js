import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';



export default function LogInPanel(props) {
    let [email, setEmail] = useState('demo@example.com');
    let [password, setPassword] = useState('password');
    let [currentUserId, setCurrentUserId] = useState("");
    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);

    const handleSubmit = async e => {
        e.preventDefault();
        debugger;
        const response = await fetch(`/api/session`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password}),
        });
        if (response.ok) {
            const { player } = await response.json();
            props.updateUser(player.id);
            setCurrentUserId(player.id);
        }
    }

    if (currentUserId) {
        debugger;
        return <Redirect to="/" />;
    }
    return (
      <main className="centered middled">
        <form onSubmit={handleSubmit}>
          <input type="text"
                placeholder="Email"
                value={email}
                onChange={updateEmail} />
          <input type="password"
                placeholder="Password"
                value={password}
                onChange={updatePassword} />
          <button type="submit">Login</button>
        </form>
      </main>
    );
  }
