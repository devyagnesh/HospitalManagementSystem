import React from 'react'
import styled from 'styled-components'
import Wrapper from '../../Layouts/Wrapper'

const KeyFeaturesSection = styled.section`
    max-width:100%;
    height:30rem;
    min-height:30rem;
    background-color:var(--clr-gray);
    padding:1rem 0;
`

const KeyFeaturesTopTitleWrapper = styled.div`
    max-width:100%;
    display:block;
    margin:0 auto;
    padding:2rem 0;
`

const KeyFeaturesTitle = styled.h2`
    font-size:2rem;
    text-align:center;
    font-weight:400;
    text-transform:uppercase;
`

const KeyFeatureSubTitle = styled.p`
text-align:center;
font-weight:400;
`

const KeyFeatures = () => {
  return (
    <KeyFeaturesSection>
        <Wrapper>
            <KeyFeaturesTopTitleWrapper>
               <KeyFeaturesTitle>Key Features</KeyFeaturesTitle>
               <KeyFeatureSubTitle>Take a look at some of our key features</KeyFeatureSubTitle>
            </KeyFeaturesTopTitleWrapper>
            hello
        </Wrapper>
    </KeyFeaturesSection>
  )
}

export default KeyFeatures