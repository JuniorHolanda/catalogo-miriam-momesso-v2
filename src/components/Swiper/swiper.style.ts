import { borderRadius, flex } from "@/styles/mixins";
import styled from "styled-components";

export const SBanner = styled.div`
    ${flex({})};
    
    width: 100%;
    height: 500px;
    
    img {
        ${borderRadius({radiusKey:'lg'})};
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
    
    .swiper-itens{
        overflow: hidden;
        height: 500px;
    }
`;