import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { footerLinks } from '../Menu/config';

const StyledUl = styled.ul`
  list-style: none;
  padding: 2.5px 0px 0px 0px;
  fontSize: '9px';
`

const StyledLi = styled.li`
  font-family: 'Kanit',sans-serif;
  padding: 2.5px 0px;
  fontSize: '9px';
`;

const YellowLink = styled.a`
  font-family: 'Kanit',sans-serif;
  word-wrap: 'true',
  padding: 2.5px 0px;
  fontSize: '5px';
  align-items: 'center';
`

const FooterDivider = styled.div`
  height: 1px;
  background-color: transparent;
  width: 10px;
  margin-bottom: 2.5px;
`

const FooterSpacing = styled.div`
  height: 50px;
  @media (max-width: 848px) {
    height: 200px;
  }
`

export default function Footer() {
    return (
        <>
        <FooterSpacing />
        <div style={{ position: 'relative', width: '100%', color: '#fff', backgroundColor: 'transparent', padding: '0px 0px', margin: '0px 0px 0px 0px', left:'0', right:'0' }}>
            <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
                <Box sx={{ p: '10px 10px' }}>
                <Typography variant="h4" sx={{ fontFamily: "'Kanit',sans-serif", color: '#f3756b', fontSize: '10px', fontWeight: 'bold' }}>
                    ABOUT
                </Typography>
                <StyledUl>
                    {footerLinks.column1.map((link) => <StyledLi key={link.label}><a href={link.href} target="_blank" rel="noop noreferrer">{link.label}</a></StyledLi>)}
                </StyledUl>
                </Box>
            </Grid>
            <Grid item md={3} xs={12}>
                <Box sx={{ p: '10px 10px' }}>
                <Typography variant="h4" sx={{ fontFamily: "'Kanit',sans-serif", color: '#9a6aff', fontSize: '10px', fontWeight: 'bold' }}>
                    SOCIAL
                </Typography>
                <StyledUl>
                    {footerLinks.column2.map((link) => <StyledLi key={link.label}><a href={link.href} target="_blank" rel="noop noreferrer">{link.label}</a></StyledLi>)}
                </StyledUl>
                </Box>
            </Grid>
            </Grid>

            <Grid container spacing={1}>
            <Grid item xs={12}>
                <Box sx={{ p: '5px 5px' }}>
                <FooterDivider />
                <YellowLink href='https://wwww.universalfloki.com/disclaimer' target="_blank" rel="noop noreferrer" style={{ color: '#ffb237', left: '20px', top:'-20px' }}>No content on the site constitutes - or should be understood as constituting - a recommendation to enter in any securities, cryptocurrency, or cryptoasset transactions or to engage in any of the investment strategies presented in our online content. </YellowLink>
                </Box>
            </Grid>
            </Grid>
        </div>
        </>
    )
}