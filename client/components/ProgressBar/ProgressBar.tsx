import React from "react";
import { convertTime } from "../../assets/assets";
import { ProgressBarProps } from "./ProgressBar.props";

export const ProgressBar = ({ barLength, currentValue, onChange, isTime }: ProgressBarProps): JSX.Element => {
  return (
    <div style={{ display: 'flex' }}>
      <input
        type='range'
        onChange={onChange}
        min={0}
        max={barLength}
        value={currentValue}
      />
      {isTime && <div>{convertTime(currentValue)}/{convertTime(barLength)}</div>}
      {!isTime && <div>{currentValue}/{barLength}</div>}
    </div>
  )
}