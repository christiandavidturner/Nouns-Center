import React from "react";
import Grid from "../components/Dev/Grid";
import Header from "../components/Header";
import SubheaderBodyButton from "../components/SubheaderBodyButton";
import Title from "../components/Title";

const Dev = () => {
  return (
    <div>
      <Header title="Dev | Nouns Center" />
      <Title title="Dev" />

      <SubheaderBodyButton
        title="Developer Resources"
        body="You'll find a list of technical resources & docs about working with Nouns as well as a link to our Github repos. If there's a question you have feel free to click the button and submit via Github Discussions."
        btnLink="https://github.com/nounsDAO/nouns-monorepo/discussions/new"
        btnText="Ask A Question"
      />

      <Grid />
    </div>
  );
};

export default Dev;