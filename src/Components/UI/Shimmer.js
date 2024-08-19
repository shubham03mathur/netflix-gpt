import { memo } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const Shimmer = memo(({ chunk }) => {
    const shimmerContainer = (
        <Box sx={{ overflow: "hidden" }}>
            <Grid container wrap="nowrap">
                <Box>
                    <Skeleton animation="wave" sx={{ bgcolor: '#1e293b' }} variant="rectangular" width={150} height={150} />
                </Box>
            </Grid>
        </Box>
    );

    const shimmerStack = [...new Array(chunk)].map((_, i) => {
        return (
            <div key={i} className="m-2">
                {shimmerContainer}
            </div>
        );
    });

    return (
        <div className="flex flex-row flex-wrap m-2 h-full">
            {shimmerStack}
        </div>
    );
});

export default Shimmer;
