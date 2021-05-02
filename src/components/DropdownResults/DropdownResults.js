import {React}  from 'react';
import PropTypes from 'prop-types';
import './DropdownResults.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import Divider from '@material-ui/core/Divider';

function DropdownResults({term, results, updateResults, open , toggleDropdown}) {
    /**
     * @param item
     */
    const itemClick = (item) => {
        toggleDropdown();
        const userData = {};
        if(item.id){
            if(!JSON.parse(localStorage.getItem('userData'))) {
                userData[item.id] = item;
                // update local storage
                localStorage.setItem('userData', JSON.stringify(userData));
                // update state
                // setStorage(JSON.parse(localStorage.getItem('userData')));
                updateResults(JSON.parse(localStorage.getItem('userData')));
            }else {
                // current local storage data
                let localStorageData = JSON.parse( localStorage.getItem('userData'));
                // update local storage
                localStorageData[item.id] = item;
                localStorage.setItem('userData', JSON.stringify(localStorageData));
                // update state
                // setStorage(localStorageData);
                updateResults(localStorageData);
            }
        }
    };

    return (
        <div className="Search" data-testid="Search">
            {open ? <div className="TermBox"><p>{term}</p></div> : ''}
            {open ? <div className="ResultLayer">
                {results && results.map((item, index , arr) => (
                    <List key={item.id} component="nav" className='ResultNavbar' aria-label="mailbox folders">
                        <ListItem button key={item.id} onClick={() => itemClick(item)}>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.name} secondary={item.message} />
                        </ListItem>
                        {(index !== arr.length - 1) ? <Divider /> : ''}
                    </List>
                ))}
            </div> : ''}
        </div>
    )
}


DropdownResults.propTypes = {
    term: PropTypes.string.isRequired,
    results: PropTypes.array,
};

DropdownResults.defaultProps = {};

export default DropdownResults;
