import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { Visibility as VisibilityIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const PasswordCard = ({ id, account, username, encryptedPassword, onEdit, onDelete,handleClickOpen }) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 mb-4">
            <Card className="h-100">
                <CardContent className="d-flex flex-column justify-content-between h-100">
                    <div className="mb-2">
                        <Typography variant="h6" className="text-truncate" title={account}>
                            {account}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className="text-truncate" title={username}>
                            {username}
                        </Typography>
                    </div>
                    <div className="d-flex align-items-center mt-auto">
                        <Typography variant="body2" className="me-2 text-truncate" title={encryptedPassword}>
                            {encryptedPassword}
                        </Typography>
                        <IconButton color="primary" aria-label="view password" onClick={() =>handleClickOpen(id)}>
                            <VisibilityIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="edit password" onClick={() => onEdit(id,account,username)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton color="error" aria-label="delete password" onClick={() => onDelete(id)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PasswordCard;
