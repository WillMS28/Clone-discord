import React from 'react'

import { Grid } from './styles'

import ServerList from '../ServerList/index'
import ServerName from '../ServerName/index'

const Layout: React.FC = () => {
  return <Grid>
    <ServerList />
    <ServerName />
  </Grid>
}

export default Layout