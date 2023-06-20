import React from 'react';
import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction
} from '@material-tailwind/react';

const CostumSpeedDial: React.FC = () => {
    return (
        <div className="absolute bottom-0 right-0">
            <SpeedDial></SpeedDial>
        </div>
    );
};
export default CostumSpeedDial;
