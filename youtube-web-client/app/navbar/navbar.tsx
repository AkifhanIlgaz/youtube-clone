'use client';

import { User } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { onAuthStateChangedHelper } from '../firebase/firebase';
import styles from './navbar.module.css';
import SignIn from './sign-in';

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image
          src="/youtube-logo.svg"
          alt="YouTube Logo"
          width={90}
          height={20}
        />
      </Link>
      <SignIn user={user} />
    </nav>
  );
}
