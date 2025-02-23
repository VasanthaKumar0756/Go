const indexVideo = '/HomePage/index.mp4';

const IndexVideo = () => {
    return (
        <>
            <div className="hero-wrap js-fullheight">
                <video autoPlay muted loop className="index-video">
                    <source src={indexVideo} type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default IndexVideo