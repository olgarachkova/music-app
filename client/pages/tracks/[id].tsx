import { useRouter } from "next/dist/client/router";
import React from "react";
import { withLayout } from "../../Layout/Layout";

const TrackPage = (): JSX.Element => {
    const router = useRouter();
    return(
        <div>Track page</div>
    )
}

export default withLayout(TrackPage);