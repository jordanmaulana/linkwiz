"use client"

import { Button, Input } from '@nextui-org/react'
import React from 'react'

export const Register = () => {
  async function handleRegister(event) {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const res = await fetch("/api/auth/register", {
      method: "POST",
      BODY: JSON.stringify({ fullName , email , password})
    });
    const data = await res.json();
    console.log(data);

  }

  return (
    <main>
        <section></section>
        <form onSubmit={handleRegister}>
        <section>
            <Input name="fullName" placeholder="Full Name"/>
            <Input name="email" placeholder="Email" />
            <Input name="password" placeholder="Password" type="password" />
            <Button type="submit">Register</Button>
        </section>
        </form>
    </main>
  )
}
