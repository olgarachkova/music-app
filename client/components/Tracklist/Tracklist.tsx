import { Box, Grid } from "@mui/material";
import React from "react";
import { TrackItem } from "../TrackItem/TrackItem";
import { TracklistProps } from "./Tracklist.props";

export const Tracklist = ({tracks}: TracklistProps): JSX.Element => {
  return(
    <Grid>
      <Box>
        {tracks.map(track => <TrackItem 
        key={track._id}
        track={track}
        />)}
      </Box>
    </Grid>
  )
}