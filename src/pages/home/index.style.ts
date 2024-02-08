import styled from "styled-components";
import Imgs from "@/constants/imgs";

export const FullPageWrapper = styled.section`
    height:100vh;
    position:absolute;
    top:100vh;
    z-index:15;
    background-color:black;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:100%;
    transition:all 0.8s;
`

export const HeroSectionWraper = styled.section`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    position:absolute;
    z-index:10;
    width:100%;
    height:100vh;
`

export const HeaderWrapper = styled.header`
    position:absolute;
    width:100%;
    z-index:20;
`

export const HeroSlideWrapper = styled.div`
    height:100vh;
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    z-index:5;
`

export const Overlay = styled.div`
    background-color:rgba(0,0,0,0.3);
    position:absolute;
    width:100%;
    height:100%;
    z-index:10;
`

export const FeatureSectionSlideGrid = styled.div`
    display:grid;
    align-items:center;
    grid-template-columns:repeat(3, minmax(0px, 1fr));
    gap:2rem;
   
    &>*:nth-child(2) > div:first-child {
        height:20rem;
    }
`

export const FeatureSectionSlideWrapper = styled.div`
    height:15rem;
`

export const ViewDetailSectionWrapper = styled(FullPageWrapper)`
    background-image:url(${Imgs.Bg3.src});
    background-size:cover;
`

export const OffPlanSectionImageWrapper = styled.div`
    &:nth-child(even) {
        padding-top:2rem;
    }
`