import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || ""};

    background-color: ${(props) => props.BgColor || "#fff"};

    display: flex;
    flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")}
`;

function App (){
    return( 
        <Wrapper>
            <Wrapper height="80px" BgColor="#111"></Wrapper>
            <Wrapper height="400px" direction="row">
                <Wrapper width="10%" height="100%" BgColor="#222"></Wrapper>
                <Wrapper width="90%" height="100%" BgColor="#333"></Wrapper>
            </Wrapper>    
            <Wrapper height="280px" direction="row">
                <Wrapper width="50%" height="100%" BgColor="#444"></Wrapper>
                <Wrapper width="50%" height="100%" BgColor="#555"></Wrapper>
            </Wrapper>    
            <Wrapper width="100%" height="300px" direction="row">
                <Wrapper width="50%" height="100%" direction="column">
                    <Wrapper width="100%" height="100%" BgColor="#666"></Wrapper>
                    <Wrapper width="100%" height="100%" BgColor="#777"></Wrapper>
                </Wrapper>    
                <Wrapper width="50%" height="100%" direction="column">
                    <Wrapper width="100%" height="100%" BgColor="#888"></Wrapper>
                    <Wrapper width="100%" height="100%" BgColor="#999"></Wrapper>
                </Wrapper>    
            </Wrapper>
            <Wrapper height="200px" direction="row">
                <Wrapper width="30%" height="100%" BgColor="#111"></Wrapper>
                <Wrapper width="40%" height="100%" BgColor="#222"></Wrapper>
                <Wrapper width="30%" height="100%" BgColor="#333"></Wrapper>
            </Wrapper>   
        </Wrapper>
    )    
};

export default App;