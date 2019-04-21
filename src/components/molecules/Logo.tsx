import * as React from 'react';
import cx from 'classnames';
import * as th from './logo.sass';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export default function Logo(props: LogoProps) {
  return (
    <Link to='/' className={cx(th.logo, props.className)}>
      Vegano<span className={th.logoWorld}>🌎</span>Mercado
    </Link>
  );
}
