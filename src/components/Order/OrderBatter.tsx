import { Container, Stack, Typography } from "@mui/material";
import { pageWithHeader } from "../../styleSets/pageWithHeader.styleset";
import GradientBackground from "../General/GradientBackground";

export default function OrderBatter() {
    return (

        <GradientBackground>
            <Container sx={{ ...pageWithHeader, width: "100%" }}>


                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>

                    <Stack spacing={2} useFlexGap>


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
                            Order
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
                                Batter
                            </Typography>
                        </Typography>

                    </Stack>
                </Container >

                

            </Container>
        </GradientBackground>
    )
}
