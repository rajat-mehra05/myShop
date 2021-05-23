import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Ryan Jonas Poetry Store",
  description:
    "Ryan Jonas is an Indian poet and writes poems that incrporates themes like love, relationships, friendships, life quotes,etc. ",
  keywords: "she poem, love, friendship,life",
};

export default Meta;
