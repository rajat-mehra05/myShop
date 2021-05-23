import React from "react";
import Footer from "./index";

const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Title>
        thepoetryofryan shop will be live soon. Stay tuned! <br />
        <br />
      </Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Title> Help</Footer.Title>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor Relations</Footer.Link>
          <Footer.Link href="#">Prints Avaialble</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Help Centre</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Redeem gift cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Title> Contact Me</Footer.Title>
          <Footer.Link href="https://twitter.com/_rajat_mehra_" target="_blank">
            Twitter
          </Footer.Link>
          <Footer.Link
            href="https://www.linkedin.com/in/rajat-mehra-/"
            target="_blank"
          >
            LinkedIn
          </Footer.Link>
          <Footer.Link href="https://github.com/rajat-mehra05" target="_blank">
            GitHub
          </Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>©Ryan Jonas Shop 2021</Footer.Text>
    </Footer>
  );
};

export default FooterContainer;
