import { Suspense } from "react";
import { useLoaderData, Await } from "react-router";

const Browse = () => {
    const { data } = useLoaderData();
    return (
        <div>
            <Suspense fallback="Loading...">
                <Await
                    resolve={data}
                    errorElement={<div>Could not load reviews 😬</div>}
                    children={(resolvedData) => (
                        <div>{JSON.stringify(data)}</div>
                    )}
                />
            </Suspense>
        </div>
    );
};

export default Browse;
