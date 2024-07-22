import { Box } from "@mui/material";

export default function GradientBackground(props: any) {
    return (
        <Box
            id="hero"
            sx={() => ({
                width: '100%',
                height:'100vh',
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'linear-gradient(180deg, #FFC098, #FFF)',
                position: "absolute"
            })}
        >
            { props.children }
        </Box>
    )
}
