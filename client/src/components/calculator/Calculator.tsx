import { PropsWithChildren } from 'react';
import styles from './Calculator.module.scss';

export default function Calculator({ children }: PropsWithChildren) {
  return <div className={styles.calculator}>{children}</div>;
}
