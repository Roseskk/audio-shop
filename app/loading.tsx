import React, {CSSProperties} from 'react';
import RingLoader from "react-spinners/RingLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};
const Loading = () => {
    return (
        <main style={{display: 'grid', height: '100vh', placeItems: 'center'}}>
            <RingLoader cssOverride={override} color="#ffbc11"/>
        </main>
    )
}

export default Loading;