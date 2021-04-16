import React from 'react'

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles'

const ServerName: React.FC = () => {
  return (
    <Container>
      <div>
        <HashtagIcon />
        <span>chat-livre</span>      
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  )
}

export default ServerName