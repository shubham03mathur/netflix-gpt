import { memo } from "react";
import { ShimmerDiv } from "shimmer-effects-react";

const Shimmer = memo(({ chunk }) => {
    const shimmerStack = [...new Array(chunk)].map(() => {
        return <div className="m-2"><ShimmerDiv mode="dark" height={150} width={150} /></div>;
    });

    return (
        <div className="flex flex-row flex-wrap p-4 m-2 h-full">
            {shimmerStack}
        </div>
    );
});

export default Shimmer;
