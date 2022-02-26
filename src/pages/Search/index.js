import React, { useState, useEffect } from "react";
import { Container, Name } from './styles';

import {  useNavigation, useRoute  } from '@react-navigation/native';
import api, { key } from '../../services/api';

function Search(){
    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () =>{
        let isActive = true;

        async function getSearchMovie(){
            const response = await api.get('/search/movie', {
                params:{
                    query: route?.params?.name,
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                }
            })

            if(isActive){
                setMovie(response.data.results);
                setLoading(false);

            }

        }

        if(isActive){
            getSearchMovie();
        }

        return () => {
            isActive = false;
        }

    }, [] )
     
    if(loading){
        return(
            <Container>
            </Container>
        )
    }

    return(
        <Container>
            <Name>TESTE ABA SEARCH</Name>
        </Container>
    )
}

export default Search;