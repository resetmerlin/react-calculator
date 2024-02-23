/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import { TButtonElementProps } from '../../../types';
import styles from './Button.module.scss';

interface IProps extends TButtonElementProps {
  type: 'submit' | 'button';
  purpose: 'modifiers' | 'operations' | 'digits';
}

export default function Button({
  children,
  className = '',
  purpose,
  type,
  ...props
}: IProps) {
  return (
    <button
      {...props}
      type={type}
      className={`${className}  button ${styles[purpose]}`}
    >
      {children}
    </button>
  );
}
