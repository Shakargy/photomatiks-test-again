import React from "react";
import Typography from "@material-ui/core/Typography";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading
} from "../Component/FooterStyle";

const Footer = () => {
  return (
    <Box>
      {/* <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1> */}
      <Container>
        <Row>
          <Column>
            <FooterLink>
              {" "}
              <Typography variant="h6" gutterBottom>
                שאג
              </Typography>
            </FooterLink>
            <FooterLink>שאג</FooterLink>
          </Column>
          <Column>
            <FooterLink>
              {" "}
              <Typography variant="h6" gutterBottom>
                שאג
              </Typography>
            </FooterLink>

            <FooterLink href="#">שאג</FooterLink>
          </Column>
          <Column></Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
