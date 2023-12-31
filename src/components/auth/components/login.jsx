"use client"

import { Button, Input } from '@nextui-org/react'
import React from 'react'

export const Login = () => {
  function handleLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log({ email, password});
  }

  return (
    <main>
        <section></section>
        <form onSubmit={handleLogin}>
        <section>
            <Input name="email" placeholder="Email" />
            <Input name="password" placeholder="Password" type="password" />
            <Button type="submit">Login</Button>
        </section>
        </form>
    </main>
  )
}
