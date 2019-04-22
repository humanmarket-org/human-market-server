import React, { useState } from 'react';
import cx from 'classnames';
import * as th from './logo.sass';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export default function Logo(props: LogoProps) {
  const [rotating, setRotating] = useState(false);

  return (
    <Link
      to='/'
      className={cx(th.logo, props.className, {[th.rotating]: rotating})}
      onMouseOver={() => setRotating(true)}
      onMouseOut={() => setRotating(false)}>
      Human<span className={th.logoWorld}></span>Market
    </Link>
  );
}
