import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default function CustomList(props) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const { data, name, icon } = props

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className="w-full"
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <img src={icon} alt="icons" className="w-10 h-10" />
        </ListItemIcon>
        <ListItemText primary={name} />
        {data && open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      {(data && open) &&
        (
            <List component="div" disablePadding>
              {
                Object.keys(data).map((da, index) => (
                  <a key={index} href={data[da]}>
                    <ListItem button className="capitalize text-right">
                      {da}
                    </ListItem>
                  </a>
                ))
              }
            </List>
        )
      }
    </List>
  );
}
