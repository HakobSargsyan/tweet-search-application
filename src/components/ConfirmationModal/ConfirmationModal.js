import {React} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmationModal({isOpen , openPopup, setConfirmed , confirmMessage}) {
    const handleConfirmed = (e) => {
        setConfirmed(true);
        openPopup(false);
    };

    const handleClose = () => {
        setConfirmed(false);
        openPopup(false);
    };

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Are you sure want to delete this tweet?"}</DialogTitle>
                <DialogContent>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={(e) => {handleConfirmed(e)}} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}