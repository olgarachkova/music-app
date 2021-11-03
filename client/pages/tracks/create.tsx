import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { FileUpload } from '../../components/FileUpload/FileUpload';
import { StepWrapper } from '../../components/StepWrapper/StepWrapper';
import { useInput } from '../../hooks/useInput';
import { withLayout } from '../../Layout/Layout';

const Create = (): JSX.Element => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState('');
    const [audio, setAudio] = useState('');
    const name = useInput('');
    const text = useInput('');
    const artist = useInput('');
    const router = useRouter();

    const next = () => {
        if (activeStep < 3) {
            setActiveStep(prev => prev + 1);
        } else {
            const formData = new FormData();
            formData.append('name', name.value);
            formData.append('text', text.value);
            formData.append('artist', artist.value);
            formData.append('picture', picture);
            formData.append('audio', audio);
            axios.post('http://localhost:5000/tracks', formData)
                .then(response => router.push('/tracks'))
                .catch(e => console.error(e));
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1);
    }

    return (
        <>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction='column' style={{ padding: 20, gap: 10 }}>
                        <TextField
                            {...name}
                            label='track title'
                        />
                        <TextField
                            {...artist}
                            label='artist'
                        />
                        <TextField
                            {...text}
                            label='lyrics'
                            multiline
                            rows={5}
                        />
                    </Grid>
                }
                {activeStep === 1 && <FileUpload setFile={setPicture} accept='image/*'><Button>Upload cover</Button></FileUpload>}
                {activeStep === 2 && <FileUpload setFile={setAudio} accept='audio/*'><Button>Upload audio</Button></FileUpload>}
            </StepWrapper>
            <Grid container justifyContent='space-around'>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </>
    );
}

export default withLayout(Create);