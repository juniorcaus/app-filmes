import React from 'react';

import { Container, BannerItem, Title, RateContainer, Rate } from './style';
import { Ionicons } from '@expo/vector-icons';

function SliderItem() {
    return(
        <Container activeOpacity={0.7} >
            <BannerItem 
             source={{ uri: 'https://images.unsplash.com/photo-1637188985545-4a219a45e1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80' }}   
            />

            <Title numberOfLines={1} >Vingadores</Title>

            <RateContainer>
                <Ionicons name="md-star" size={12} color="#E7A74E" />
                <Rate>9/10</Rate>
            </RateContainer>
        </Container>
    )
}

export default SliderItem;