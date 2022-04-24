import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


export default function ButtonAppBar3() {
    // const handleClick = () => {
    //     console.info('You clicked the Chip.');
    //   };
    return (
        <Box>
            <AppBar position="static" >
                <Toolbar sx={{ display: "flex", flexWrap: "wrap", alignItems: "start" }} >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: "4%", marginLeft: "20px" }}>
                        <span style={{ color: "white" }}><HomeWorkIcon sx={{ fontSize: "150%", marginRight: "20px" }} /></span>
                        <span style={{ color: "white", fontSize: "150%" }}>Purple <span style={{ color: "white", fontSize: "90%" }}> Buzz</span></span><br />
                        <div style={{ width: "200px", fontSize: "12px", marginTop: "2%" }} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerumi </div>
                        <span><FacebookIcon sx={{ margin: "5px" }} /> <InstagramIcon sx={{ margin: "5px" }} /> <WhatsAppIcon sx={{ margin: "5px" }} /> <CloudQueueIcon sx={{ margin: "5px" }} /> <BubbleChartIcon sx={{ margin: "5px" }} /></span>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, padding: "10px 20px 10px 40px", marginTop: "2%" }}>
                        <div style={{ fontSize: "150%", marginTop: "5%" }}>Our Company</div>
                        <Stack direction="row" sx={{ textAlign: "left", alignItems: "left" }}>
                            <Button variant="out" sx={{ padding: "1px", textAlign: "left" }} > <ChevronRightIcon />Home</Button>
                        </Stack>
                        <Stack direction="row" sx={{ textAlign: "left", alignItems: "left" }}>
                            <Button variant="out" sx={{ padding: "1px", }} > <ChevronRightIcon />About Us</Button>
                        </Stack>
                        <Stack direction="row" sx={{ textAlign: "left", alignItems: "left" }}>
                            <Button variant="out" sx={{ padding: "1px", textAlign: "left" }} > <ChevronRightIcon />Work</Button>
                        </Stack>
                        <Stack direction="row" sx={{ textAlign: "left", alignItems: "left" }}>
                            <Button variant="out" sx={{ padding: "1px", textAlign: "left" }} > <ChevronRightIcon />Price</Button>
                        </Stack>
                        <Stack direction="row" sx={{ textAlign: "left", alignItems: "left" }}>
                            <Button variant="out" sx={{ padding: "1px", textAlign: "left" }} > <ChevronRightIcon />contact</Button>
                        </Stack>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, padding: "10px 20px 10px 40px", margin: "20px" }}>
                        <div style={{ fontSize: "150%", marginTop: "10%" }}>Our Works</div>
                        <Stack direction="row" sx={{ textAlign: "left", alignItems: "left" }}>
                            <Button variant="out" sx={{ padding: "1px", textAlign: "left" }} > <ChevronRightIcon />Branding</Button>
                        </Stack>
                        <Stack direction="row" sx={{ textAlign: "left", alignItems: "left" }}>
                            <Button variant="out" sx={{ padding: "1px", }} > <ChevronRightIcon />busines</Button>
                        </Stack>
                        <Stack direction="row" sx={{ textAlign: "left", alignItems: "left" }}>
                            <Button variant="out" sx={{ padding: "1px", }} > <ChevronRightIcon />Marketing</Button>
                        </Stack>
                        <Stack direction="row" sx={{ textAlign: "left", alignItems: "left" }}>
                            <Button variant="out" sx={{ padding: "1px", textAlign: "left" }} > <ChevronRightIcon />Sochial media</Button>
                        </Stack>
                        <Stack direction="row" sx={{ textAlign: "left", alignItems: "left" }}>
                            <Button variant="out" sx={{ padding: "1px", textAlign: "left" }} > <ChevronRightIcon />Digital solution</Button>
                        </Stack>
                        <Stack direction="row" sx={{ textAlign: "left", alignItems: "left" }}>
                            <Button variant="out" sx={{ padding: "1px", textAlign: "left" }} > <ChevronRightIcon />graphic</Button>
                        </Stack>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, padding: "10px 20px 10px 40px", margin: "20px" }}>
                        <div style={{ fontSize: "150%", marginTop: "10%" }} x >For Client</div>
                        <div><LocalPhoneIcon /> (+998) 91-784-69-89</div>
                        <div><MailOutlineIcon /> info@company.com</div>
                    </Typography>
                </Toolbar>
                <Toolbar>
                    <div> CopyRight 2021 Purple Buzz Company. All Rights Reserved</div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}