import config from '../config.json'
import React from 'react';
import styled from "styled-components";
import Menu from "../src/components/Menu"
import { CSSReset } from '../src/components/CSSreset';
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState('Fr')
    // const valorDoFiltro = "Frost";
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu
                    valorDoFiltro={valorDoFiltro}
                    setValorDoFiltro={setValorDoFiltro}
                />
                <Header />
                <Timeline
                    searchValue={valorDoFiltro}
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
       // margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
const StyledBanner = styled.div`
    background-image: url(${({bg})=>bg});
    height: 230px;
    background-size: cover;
`
function Header() {
    return (
        <StyledHeader>
            <StyledBanner bg={config.bg}/>
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
function Timeline({searchValue, ...props}) {
    const playlistNames = Object.keys(props.playlist)
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlist[playlistName]
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video)=>{
                                const titleNormalized = video.title.toLowerCase()
                                const searchValueNormalized = searchValue.toLowerCase()
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
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