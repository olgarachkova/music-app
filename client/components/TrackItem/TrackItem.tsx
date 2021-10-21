import styles from "./TrackItem.module.scss"
import React from "react";
import { TrackItemProps } from "./TrackItem.props";
import { Card, Grid, IconButton } from "@mui/material";
import PlayArrow from "@mui/icons-material/PlayArrow";
import { Pause } from "@mui/icons-material";
import { useRouter } from "next/dist/client/router";

export const TrackItem = ({track, active=false}:TrackItemProps): JSX.Element => {
    const router = useRouter();
    return(
        <Card className={styles.track} onClick={()=>router.push('/tracks/'+track._id)}>
            <IconButton onClick={e=>e.stopPropagation()}>
                {active 
                    ?<Pause/>
                    :<PlayArrow/>}
            </IconButton>
            <img height={70} width={70} src={track.picture}/>
            <Grid container direction='column'>
                <div>{track.name}</div>
                <div>{track.artist}</div>
            </Grid>
        </Card>
    )
}