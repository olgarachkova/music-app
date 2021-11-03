import styles from './Player.module.scss';
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { PlayerProps } from "./Player.props";
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

let audio: HTMLAudioElement;

export const Player = ({ ...props }: PlayerProps): JSX.Element => {
  const { active, pause, volume, duration, currentTime } = useTypedSelector(state => state.player);
  const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration } = useActions();

  const play = () => {
    if (pause) {
      playTrack()
      audio.play()
    } else {
      pauseTrack()
      audio.pause()
    }
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setVolume(Number(e.target.value));
  }

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  }

  const setAudio = () => {
    if (active) {
      audio.src = 'http://localhost:5000/' + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      }
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      }
    }
  }

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  return (
    <div className={styles.player} {...props}>
      <IconButton onClick={play}>
        {!pause
          ? <Pause />
          : <PlayArrow />}
      </IconButton>
      <Grid container direction='column'>
        <div>{active?.name}</div>
        <div>{active?.artist}</div>
      </Grid>
      <div className={styles.bar}>
        <ProgressBar barLength={duration} currentValue={currentTime} onChange={changeCurrentTime} isTime />
        <VolumeUp style={{ marginLeft: '10' }} />
        <ProgressBar barLength={100} currentValue={volume} onChange={changeVolume} />
      </div>
    </div>
  )
}