import config from '../config.json'
import styled from "styled-components";
import Menu from "../src/components/Menu"
import { CSSReset } from '../src/components/CSSreset';
import { StyledTimeline } from "../src/components/Timeline";
function HomePage() {
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu />
                <Header />
                <Timeline
                    playlist={config.playlist}
                />
            </div>
        </>
    );
}

export default HomePage;

// function Menu() {
//     return (
//         <div>Menu</div>
//     );
// }

const StyledHeader = styled.div`
    img{
        width:80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            {/* <img src='logo'/> */}
            <section className='user-info'>
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    );
}
function Timeline(props) {
    const playlistNames = Object.keys(props.playlist)
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlist[playlistName]
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    );
}