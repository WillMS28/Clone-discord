import React from 'react'

import logo from '../../assets/Willwilliam.svg'

import { Button } from './styles'

export interface Props {
  selected ?: boolean
  isHome ?: boolean
  hasNotifications ?: boolean
  mentions ?: number
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions
}) => {
    return <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={logo} alt={'logo'} />}</Button>
  };

export default ServerButton