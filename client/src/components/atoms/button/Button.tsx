/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import { TButtonElementProps } from '../../../types';
import styles from './Button.module.scss';

interface IProps extends TButtonElementProps {
  type: 'submit' | 'button';
  purpose: 'modifiers' | 'operations' | 'digits';
}

/**
 * Responsible for making Basic Atoms button
 *
 * - Responsible for change the type based on the props
 * - Responsible for change the purpose based on the props
 */
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
