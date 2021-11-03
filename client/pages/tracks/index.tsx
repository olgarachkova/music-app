/* eslint-disable no-empty-pattern */
import styles from '../../styles/Tracks.module.scss'
import { Button, Card, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { withLayout } from '../../Layout/Layout';
import { useRouter } from 'next/dist/client/router';
import { Tracklist } from '../../components/Tracklist/Tracklist';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks, searchTracks } from '../../store/actions/track';
import { useDispatch } from 'react-redux';

const Index = (): JSX.Element => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector(state => state.track);
  const [query, setQuery] = useState('');
  const [timer, setTimer] = useState(0);
  const dispatch = useDispatch() as NextThunkDispatch;

  const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(async () => {
        await dispatch(await searchTracks(e.target.value));
      }, 500)
    )
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <Grid container justifyContent='center'>
      <Card className={styles.card}>
        <Grid container justifyContent='space-between'>
          <h1>Tracks</h1>
          <Button variant="contained" onClick={() => router.push('/tracks/create')}>Upload new track</Button>
        </Grid>
        <TextField
          fullWidth
          value={query}
          onChange={search} />
        <Tracklist tracks={tracks} />
      </Card>
    </Grid>

  );
}

export default withLayout(Index, 'Best tracks');

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const dispatch = store.dispatch as NextThunkDispatch
  await dispatch(await fetchTracks())
})