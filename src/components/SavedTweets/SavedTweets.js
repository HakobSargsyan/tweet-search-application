import PropTypes from 'prop-types';
import './SavedTweets.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';
import {React, useState} from 'react';

function SavedTweets({storage, setStorage}) {
    const confirmMessage = 'Are you sure you want to delete tweet ? ';
    const [openPopup, setOpenPopup] = useState(false);
    const [item, setItem] = useState({});
    const deleteItem = (item, event) => {
        setOpenPopup(true);
        setItem(item);
    };
    const setConfirmed = (confirmed) => {
        if(confirmed){
            // clone state
            const stateClonned = {...storage};
            //find and delete item
            for (let i in stateClonned){
                if(stateClonned[i].id === item.id){
                    delete stateClonned[i];
                }
            }
            // update local storage
            localStorage.setItem('userData', JSON.stringify(stateClonned));
            // update state
            setStorage(stateClonned);
        }
    }
    return (
        <div className="SavedTweets" data-testid="SavedTweets">
            <ConfirmationModal openPopup={setOpenPopup} isOpen={openPopup} setConfirmed={setConfirmed} confirmMessage={confirmMessage} />
            <h1>Saved Tweets</h1>
            <div className="SavedTweetsWrapper">
                {storage && Object.keys(storage).map((item, index) => (
                    <List key={storage[item].id} component="nav" className='ResultNavbar' aria-label="mailbox folders">
                        <ListItem button key={storage[item].id}>
                            <div id="Mdiv" onClick={(e) => deleteItem(storage[item], e)}>
                                <div className="Mdiv">
                                    <div className="Md"/>
                                </div>
                            </div>
                            <ListItemAvatar>
                                <Avatar>
                                    <BeachAccessIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={storage[item].name} secondary={storage[item].message}/>
                        </ListItem>
                    </List>
                ))}
                {storage === null || storage === '' ? <p style={ {textAlign:'center'} }>Please Search and click on your favourite tweet for save it</p> : ''}
            </div>
        </div>


    )
};

SavedTweets.propTypes = {
    storage: PropTypes.object,
    setStorage: PropTypes.func
};

SavedTweets.defaultProps = {};

export default SavedTweets;
