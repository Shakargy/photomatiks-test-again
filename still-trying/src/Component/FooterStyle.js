import styled from 'styled-components';

   
export const Box = styled.div`
  padding: 20px 20px;
  background: black;
  
  bottom: 0;
  width: 100%; 
 
    flex-direction: column;
    
  
   
  @media (max-width: 700px) {
    padding: 70px 30px;
    position: absolute;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 40px;
  
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 0px;
  
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
  
 
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  marginRight:-2000px;
  
`;