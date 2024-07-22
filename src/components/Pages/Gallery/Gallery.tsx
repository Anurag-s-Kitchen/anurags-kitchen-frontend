import { Container, Stack, Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { pageWithHeader } from "../../../styleSets/pageWithHeader.styleset";
import GradientBackground from "../../General/GradientBackground";

import "./Gallery.css"

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1665660710687-b44c50751054',
        title: 'Dosa',
    },
    {
        img: 'https://images.unsplash.com/photo-1668236499396-a62d2d1cb0cf',
        title: 'Food',
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace',
        title: 'Rice',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
];

export default function Gallery() {
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
                                Gallery
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
                                Take&nbsp;a&nbsp;Peek&nbsp;into&nbsp;Our&nbsp;Kitchen.
                            </Typography>

                            <Typography component={"span"}>
                                Feast&nbsp;with&nbsp;Your&nbsp;Eyes...
                            </Typography>

                        </Typography>

                    </Stack>
                </Container >

                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <ImageList sx={{ width: "100%" }} variant="masonry" cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem sx={{ overflow: "hidden" }} key={item.img}>
                                <img
                                    className="image"
                                    // srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}`}
                                    alt={item.title}
                                // loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Container>

            </Container>
        </GradientBackground>
    )
}
