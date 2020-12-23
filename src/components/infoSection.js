import React from 'react'
import styled from 'styled-components';


const Section = styled.section``;
const Container = styled.div``;
const ColumnLeft = styled.div``;
const ColumnRight = styled.div``;

function infoSection() {
    return (
       <Section>
           <Container>
               <ColumnLeft>
               <h1>heading</h1>
               <p>paragrpah</p>
               <p>paragrpah</p>
               <Button to='/homes'>label</Button>
               </ColumnLeft>
               <ColumnRight>
                <img src="" alt="home"></img>
               </ColumnRight>
           </Container>
       </Section>
    )
}

export default infoSection
