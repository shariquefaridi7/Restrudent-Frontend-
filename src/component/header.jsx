import { Typography, Badge, Stack, Box, } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import Model from './model';
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>

            <Stack direction={{ xs: 'column', sm: "row" }} justifyContent={'space-around'} spacing={{ xs: "2rem", sm: "15rem" }} alignItems={"center"} bgcolor={'brown'} p="1.5rem">
                <Typography variant='h4' fontWeight={"bold"} color="white" > FoodHub <FastfoodIcon sx={{ size: '10rem' }} /> </Typography>
                <Box sx={{
                    display: "flex", justifyContent: "space-between",
                    bgcolor: "black", color: "white", borderRadius: "5rem", pl: "3rem",
                    pr: "3rem", pt: "1rem", pb: "0.7rem"
                }}
                    onClick={() => setIsOpen(true)}


                >
                    <Typography sx={{ pr: "0.5rem", }}>Your Cart </Typography>
                    <Badge badgeContent={0} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </Box>
            </Stack>
            <Box
                sx={{
                    display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "end",
                    backgroundImage: 'url("https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/yqmbhkup/9a99d380-037b-4654-b355-598b3d13f186.jpg")',
                    height: '25rem',
                    backgroundSize: 'cover', // You might want to add this property based on your design requirements
                }}
            >
                <Box sx={{

                    bgcolor: 'grey',
                    color: 'white',
                    width: '80%',
                    maxWidth: '600px',
                    height: "auto",
                    p: '0.6rem',
                    '@media (min-width:600px)': { p: '1.5rem' },
                    borderRadius: '1rem',
                    margin: '0 auto',
                    mb: "0.5rem"
                }} >
                    <center> <Typography variant="h5" sx={{ '@media (min-width:600px)': { fontSize: '2.6rem' } }} textAlign="center">Delicious Food,Delivered To You</Typography></center>
                    <Typography variant='body1' mt="10px">Choose Your Favirote meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home </Typography>

                    <Typography variant='body1' mt="5px">

                        All our meal are cooked with high-quality ingredients just-in-time and of course by exprience chefs  </Typography>
                </Box>


            </Box>
            <Model open={isOpen} setopen={setIsOpen} />
        </div >
    )
}

export default Nav
