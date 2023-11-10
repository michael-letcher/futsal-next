import { Button } from '@fluentui/react-components';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/favicon.ico';
import styles from './nav-bar.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarMenuWrapper}>
        <Link href="/">
          <Image src={Logo} width={50} height={50} alt="Logo"></Image>
        </Link>

        <ul className={styles.navbarMenu}>
          <li className={styles.navbarMenuItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navbarMenuItem}>
            <Link href="/fixture">Fixture</Link>
          </li>
          <li className={styles.navbarMenuItem}>
            <Link href="/ladder">Ladder</Link>
          </li>
        </ul>
      </div>

      <div className={styles.signUp}>
        <Button>Login</Button>
        <Button>Sign up</Button>
      </div>
    </nav>
  );
}
