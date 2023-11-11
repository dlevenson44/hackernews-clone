import React from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const HeaderTitle: React.FunctionComponent = () => (
  <Stack direction="row" spacing={2}>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="primary.main"
      color="primary.light"
      height="33px"
      width="33px"
    >
      Y
    </Box>
    <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
      Hacker News
    </Typography>
  </Stack>
)

export default HeaderTitle
