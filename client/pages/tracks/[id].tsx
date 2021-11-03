import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useInput } from "../../hooks/useInput";
import { ITrack } from "../../interfaces/track.interface";
import { withLayout } from "../../Layout/Layout";

const TrackPage = ({ serverTrack }: any): JSX.Element => {
    const router = useRouter();
    const [track, setTrack] = useState<ITrack>(serverTrack);
    const username = useInput('');
    const text = useInput('');

    const addComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id
            })
            setTrack({ ...track, comments: [...track.comments, response.data] })
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <Button
                variant='outlined'
                onClick={() => router.push('/tracks')}
            >
                Tracks
            </Button>
            <Grid container>
                <img height={200} width={200} src={'http://localhost:5000/' + track.picture} />
                <div>
                    <h1>Track - {track.name}</h1>
                    <h1>Artist - {track.artist}</h1>
                    <h1>Listens - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Lyrics:</h1>
            <p>{track.text}</p>
            <h1>Comments:</h1>
            <Grid container>
                <TextField
                    label='Your name'
                    fullWidth
                    {...username}
                />
                <TextField
                    label='Your comment'
                    fullWidth
                    multiline
                    rows={4}
                    {...text}
                />
                <Button onClick={addComment}>Send</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div key={comment.username + comment.text}>
                        <div>Author - {comment.username}</div>
                        <div>Comment - {comment.text}</div>
                    </div>)}
            </div>
        </>
    )
}

export default withLayout(TrackPage);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params?.id)
    return {
        props: {
            serverTrack: response.data
        }
    }
}