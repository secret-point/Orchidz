import Link from "next/link";
import styles from '@/styles/HeaderNavigation.module.css'
export function HeaderNavigation() {
  return (
    <div>
      <Link href="/" className={styles.navbarLink}>Gaming</Link>
      <Link href="/dashboard" className={styles.navbarLink}>Explore</Link>
      <Link href="/dashboard" className={styles.navbarLink}>Ranking</Link>
      <Link href="/dashboard" className={styles.navbarLink}>Chat</Link>
      <Link href="/dashboard" className={styles.navbarLink}>Analytics</Link>
      <Link href="/dashboard" className={styles.navbarLink}>Create</Link>
      <Link href="/dashboard" className={styles.navbarLink}>My Account</Link>
    </div>
  );
}
