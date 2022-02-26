import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LayersIcon from '@mui/icons-material/Layers';
import { Link } from 'react-router-dom';
import {useStore} from '../utlis/customHooks/useStore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import { Divider } from '@mui/material';
import Onboarding from '../components/onboarding/Onboarding';

export default function Home() {
    const store = useStore()
    const [step, setStep] = React.useState(1);

    return (
        <div className="max-w-xl">
            <Onboarding/>
        </div>
    )
}
