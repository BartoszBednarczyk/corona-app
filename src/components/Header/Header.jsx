import React from 'react'

import { Typography, Box } from '@material-ui/core'

import style from './Header.module.css'

export default function Header() {
    return (
        <header>
            <Typography variant="h1" className={style.title}>
                <Box fontWeight="fontWeightBold">
                COVID-19
                </Box>
                </Typography>
        </header>
    )
}
