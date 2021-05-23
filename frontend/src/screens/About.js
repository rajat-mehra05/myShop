import React from "react";
import VideoPlayer from "react-video-js-player";
import video from "../videos/video1.mp4";
import poster from "../images/poster.png";
import "./Video.css";
import { Container, Typography } from "@material-ui/core";

const About = () => {
  const videoSrc = video;

  return (
    <>
      <div className="videoBar">
        <VideoPlayer
          src={videoSrc}
          poster={poster}
          width="720"
          height="420"
          playbackRates={[0.5, 1, 2.5]}
        />
      </div>
      <div className="about-body" style={{ marginTop: "1rem" }}>
        <Container maxWidth="lg">
          <Typography
            style={{
              backgroundColor: "#a18c86",
              height: "auto",
              color: "#000",
            }}
          >
            <div
              className="text"
              style={{
                margin: "0rem 2rem",
                padding: "1.5rem 0",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
              }}
            >
              Hi, my name is Ryan Jonas.
              <br />
              <br />
              I'm a poet from mountains. I live in Uttarakhand,India - the land
              of Gods (devbhoomi).
              <br />
              <br />
              I write poems that incorpoates themes on love, life, frienships. I
              write haikus mostly, three-liners.
              <br /> <br />
              My poems are excerpts from pieces you guys won't read ever.
              <br /> <br />
              "Life is a paradox with bitter melody mixed in its soul."
              <br /> <br />
              I can send you custom handwritten poems signed by me for your
              loved ones.
              <br /> <br />
              "Words have the power to mend the broken souls."
            </div>
          </Typography>
        </Container>
      </div>
    </>
  );
};

export default About;
