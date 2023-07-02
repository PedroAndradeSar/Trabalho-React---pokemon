import React from "react";
import { CircularProgress } from "@mui/material";

const Loading = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <CircularProgress size={100} />
            </div>
        </div>
    );
}

export default Loading;