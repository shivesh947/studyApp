import React,{useState,Fragment} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CustomList from '../CustomList'

import DownloadButton from '../install'
import install_img from '../../../assests/icons/installlogo.png'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const menuList = [
    { name: "Home", icon: "https://webstockreview.net/images/clipart-home-garden-13.png", link: "/" },
    { name: "Maths", icon: "https://webstockreview.net/images/binder-clipart-math.png", subMenu: { table: '/math/Tables', Arithmetic: '/math/Arithmetic' } },
    { name: "English", icon: "https://miro.medium.com/max/512/1*d04k81NUZ-HPOxkONFuQxQ.png", subMenu: { Dictionary: '/english/Dictionary', 'One Word': '/english/oneWord' } },
    // { name: "Hindi", icon: "", subMenu: {} }
]


export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = useState({
        // top: false,
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {menuList.map((dd, index) => (
                    dd.subMenu ? <CustomList data={dd.subMenu} name={dd.name} key={index} icon={dd.icon} link={dd.link} /> :
                        <a href={dd.link} key={index}> <ListItem button className="capitalize">
                            <ListItemIcon><img src={dd.icon} alt="icons" className="w-10 h-10" /></ListItemIcon>
                            <ListItemText>{dd.name}</ListItemText>
                        </ListItem>
                        </a>
                ))}
            </List>
            <Divider />
            <List onClick={() => DownloadButton()}>
                <ListItem className="cursor-pointer hover:bg-gray-100">
                    <ListItemIcon><img src={install_img} alt="icons" className="w-10 h-10" />
                    </ListItemIcon>
                    <ListItemText>Click To Install</ListItemText>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} className="outline-none focus:outline-none" >
                        <MenuIcon />
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </Fragment>
            ))}
        </div>
    );
}