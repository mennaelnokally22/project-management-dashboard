import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const EmailDialog = ({ children, title, content, onConfirm, btnStyle }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const onSubmit = () => {
    //Email validatio
    handleClick();
    onConfirm();
  };
  return (
    <div>
      <Tooltip title={title} placement='left'>
        <Fab color='primary' onClick={handleClick} className={btnStyle}>
          {children}
        </Fab>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClick}
        aria-labelledby='form-dialog-title'
        fullWidth
        maxWidth='sm'
      >
        <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>

          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            value
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onSubmit()} color='primary'>
            Done
          </Button>
          <Button onClick={handleClick} color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmailDialog;
