import styles from '../../styles/Tracks.module.scss'
import { Button, Card, Grid } from '@mui/material';
import React from 'react';
import { withLayout } from '../../Layout/Layout';
import { useRouter } from 'next/dist/client/router';
import { ITrack } from '../../interfaces/track.interface';
import { Tracklist } from '../../components/Tracklist/Tracklist';

const Index = (): JSX.Element => {
    const router = useRouter();
    const tracks:ITrack[] = [
      {
        "_id": "6165d01c937deb8e77804309",
        "comments": [],
        "audio": "http://localhost:5000/audio/202e6db0-cc68-4762-a60f-a271020346c6.mp3",
        "picture": "http://localhost:5000/image/22b8cc4f-bb2c-45df-80e5-4084abb54041.jpg",
        "listens": 0,
        "text": "texttexttext1",
        "artist": "gothic knights",
        "name": "welcome to my horror",
        "__v": 0
      },
      {
        "_id": "6165d051937deb8e7780430c",
        "comments": [],
        "audio": "http://localhost:5000/audio/08070e40-204e-41b6-8df2-ca2e226b574a.mp3",
        "picture": "http://localhost:5000/image/3d33bd4e-de26-4800-a5d3-a1a4fb4282f7.jpg",
        "listens": 0,
        "text": "texttexttext2",
        "artist": "the great collapse",
        "name": "devolve",
        "__v": 0
      },
      {
        "_id": "6165d071937deb8e7780430e",
        "comments": [],
        "audio": "http://localhost:5000/audio/d630905b-74f5-48d5-9f28-50c92e667a85.mp3",
        "picture": "http://localhost:5000/image/6e3f2164-ad0f-4608-97b0-594d721f0240.jpg",
        "listens": 0,
        "text": "texttexttext3",
        "artist": "opeth",
        "name": "sorceress",
        "__v": 0
      }
    ];
    
    return (
    <Grid container justifyContent='center'>
        <Card className={styles.card}>
            <Grid container justifyContent='space-between'>
                <h1>Tracks</h1>
                <Button variant="contained" onClick={()=>router.push('/tracks/create')}>Upload new track</Button>
            </Grid>
            <Tracklist tracks={tracks}/>
        </Card>
    </Grid>
    
    );
}

export default withLayout(Index);