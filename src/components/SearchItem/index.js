import React from "react";
import  { Container, Banner } from './styles';

function SearchItem({ data }){
    return(
        <Container activeOpacity={0.7} >
            { data?.poster_path ? (
                <Banner
                resizeMethod="resize"
                source={{ uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}` }}  
                />
            ) : (
                <Banner
                resizeMethod="resize"
                source={ require('../../assets/semfoto.png')}  
                />
            )}
        </Container>
    )

}

export default SearchItem;