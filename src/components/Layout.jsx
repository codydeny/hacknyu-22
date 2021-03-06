import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// icons
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ArrowForward, Bolt, ExitToApp, GitHub, Light, LightModeOutlined, MemorySharp, Person, PersonOutline, Public, Translate} from '@mui/icons-material';
import FingerprintSharpIcon from '@mui/icons-material/FingerprintSharp';
import NearMeSharpIcon from '@mui/icons-material/NearMeSharp';
import Avatar from '@mui/material/Avatar';
import { ChipIcon, HeartIcon, LightBulbIcon } from '@heroicons/react/solid'
import { Badge, LinearProgress } from '@mui/material';
import { Dialog, Transition } from '@headlessui/react'
import Logo from "../logo.png"
import ModeNightIcon from '@mui/icons-material/ModeNight';
import {useStore} from  "../utlis/customHooks/useStore";

import InsightsIcon from '@mui/icons-material/Insights';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Layout(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showFeatureDialog, setShowFeatureDialog] = React.useState(false);
  const [animatePulse, setAnimatePulse] = React.useState("text-blue-500");
  const [animateDarkBtn, setAnimateDarkBtn] = React.useState("");
  const {state} = useStore()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if(window.location.pathname === '/login' || window.location.pathname === '/onboarding') {
    return(<Box>
      <IconButton
        sx={{
            position : 'absolute',
            right : '0',
            top : '0',
            marginRight : '50px',
            marginTop : '10px'
          }}
        edge="end"
        color="inherit"
        aria-label="open drawer"
        onClick={props.changeTheme}
      >
        {props.theme === 'light' ? <ModeNightIcon/> : <LightModeOutlined/>}
      </IconButton>
      {props.children}
    </Box>)
  }

  return (
    <Box sx={{ display: 'flex' }} className="bg-blue-500">
      <CssBaseline />
      <AppBar position="fixed" open={open} color="inherit" className="dark:bg-black">
        <Toolbar>

          <span className={`flex flex-row font-sans absolute transition ease-in-out delay-150 animate__animated ${animatePulse} cursor-pointer`} onClick={(e)=> {
            setAnimatePulse("animate__wobble text-yellow-500");
            setTimeout(()=> {
              setAnimatePulse("text-blue-500");
            }, 1000)
          }}>
            
            {/* {animate__flash} */}
          <InsightsIcon className={`${animatePulse}`} style={{marginTop : '1px', fontSize : '1.8em', marginRight : '10px'}}/> <span className="animate__animated text-gray-500 text-sans mt-1 mr-2 pr-2">HackNYU 2022</span>
          </span>
          
          <IconButton
                sx={{
                    position : 'absolute',
                    right : '0',
                    margin : '30px'
                  }}
                edge="end"
                color="inherit"
                aria-label="open drawer"
                onClick={()=> {
                  setAnimateDarkBtn("");
                  setTimeout(()=> {
                    setAnimateDarkBtn("");
                  }, 500)
                  props.changeTheme()
                }}
                className={`animated_animate ${animateDarkBtn}`}
              >
                {props.theme === 'light' ? 
                <LightModeIcon className="text-blue-500"/>
                 : 
                 <ModeNightIcon className="text-white"/>}
              </IconButton>
        </Toolbar>
      </AppBar>
      {props.children}

      <Box component="main" sx={{ flexGrow: 1, paddingY : 3 }} className="flex flex-row justify-center mt-14">
        <DrawerHeader />
        
      </Box>
    </Box>
  );
}
