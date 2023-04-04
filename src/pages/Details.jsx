import { useLocation } from 'react-router-dom';

function Details() {
    const location = useLocation();
    console.log(location);

    const info = location.state?.info;

    return (
        <>
            {info &&
                <>
                    <h2>{info.title}</h2>
                    <p>{info.author}</p>
                </>
            }

        </>
    );
}

export default Details;