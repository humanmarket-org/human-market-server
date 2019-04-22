import React, { useState } from 'react';
import cx from 'classnames';
import * as th from './logo.sass';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface LogoProps {
  className?: string;
}

export default function Logo(props: LogoProps) {
  const [rotating, setRotating] = useState(false);

  const { t } = useTranslation();

  return (
    <Link
      to='/'
      className={cx(th.logo, props.className, {[th.rotating]: rotating})}
      onMouseOver={() => setRotating(true)}
      onMouseOut={() => setRotating(false)}>
      {t('logo.human')}<span className={th.logoWorld}></span>{t('logo.market')}
    </Link>
  );
}
