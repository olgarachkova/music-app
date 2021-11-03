export function convertTime(sec: number): string {
    const min = Math.floor(sec / 60);
    sec = sec - min * 60;
    if (sec >= 0 && sec < 10) {
        return `${min}:0${sec}`;
    }
    return `${min}:${sec}`;
}