import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import HeroGif from '../../../assets/hero-gif-ppt.gif'
import AkLogo from '../../../assets/AK-logo.png'

import GradientBackground from '../../General/GradientBackground';
import { pageWithHeader } from '../../../styleSets/pageWithHeader.styleset';

// const fadingTexts = [
//     "Order delicious Idly and Dosa Batters",
//     "Order from our deliciously curated Weekend Menu"
// ]

export default function Hero() {
    return (
        <GradientBackground>
            <Box
                id="hero"
                sx={() => ({
                    width: '100%',
                    backgroundSize: '100% 20%',
                    backgroundRepeat: 'no-repeat',
                })}
            >
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        ...pageWithHeader
                    }}
                >
                    <Stack spacing={2} useFlexGap>

                        <Container sx={{
                            display: 'flex',
                            width: "unset"
                            // flexDirection: { xs: 'column', md: 'row' },
                            // alignSelf: 'center',
                            // alignItems: 'center',
                            // borderRadius: "3px",
                            // // overflow: "hidden"                               
                        }}>

                            <img style={{ borderRadius: 10, boxShadow: "1.5px 1.5px 2px 1px rgba(108,108,108,1)" }} src={AkLogo} width={120} alt="" />
                        </Container>

                        <Typography
                            variant="h1"
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                            }}
                        >
                            Anurag's
                            <Typography
                                component="span"
                                variant="h1"
                                sx={{
                                    fontSize: 'clamp(3rem, 10vw, 4rem)',
                                    pl: {xs: 0, md: 2},
                                    color: (theme) =>
                                        theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                                }}
                            >
                                Kitchen
                            </Typography>
                        </Typography>

                        <Typography
                            textAlign="center"
                            color="text.secondary"
                            display={"flex"}
                            flexDirection={"column"}
                            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                        >
                            <Typography component={"span"}>
                                Dive&nbsp;into&nbsp;a&nbsp;world&nbsp;of&nbsp;taste&nbsp;and&nbsp;convenience!
                            </Typography>

                            <Typography component={"span"}>
                                Wake&nbsp;up&nbsp;your&nbsp;taste&nbsp;buds...
                            </Typography>

                        </Typography>

                    </Stack>
                    <Box
                        id="image"
                        sx={(theme) => ({
                            mt: { xs: 8, sm: 10 },
                            // alignSelf: 'center',
                            // height:  '100vh',
                            // width: '100%',
                            // backgroundImage: `url(${HeroGif})`,
                            // backgroundSize: 'cover',
                            borderRadius: '10px',
                            outline: '1px solid',
                            position: "relative",
                            outlineColor:
                                theme.palette.mode === 'light'
                                    ? alpha('#BFCCD9', 0.5)
                                    : alpha('#9CCCFC', 0.1),
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                                    : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                            display: "flex",
                            alignSelf: 'center',
                            textAlign: 'center',
                            overflow: "hidden"
                        })}
                    >

                        <img src={HeroGif} width={"100%"} alt="" />

                        {/* <img src={HeroImage} />
                    <Typography component={"span"} sx={{
                        color: "primary.contrastText",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-49%, 35%)"
                    }}>
                        {fadingTexts[0]}
                    </Typography> */}

                    </Box>
                </Container>
            </Box>
        </GradientBackground>
    );
}