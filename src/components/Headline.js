import React from 'react';
import './App.css';

const Headline = () => {
  return (
    <div className="headline">
      <h1 className="title">Welcome to the Toolshed!</h1>
      <p>
        We&apos;re glad you&apos;re here. We&apos;ve put together a collection
        of useful tools that we hope you&apos;ll find helpful. <br />
        Here are a few of our most popular tools: <br />
        <ul>
          <li>
            <strong>Find your IP address:</strong> This tool will tell you your
            IP address, which is a unique identifier for your computer on the
            internet.
          </li>
          <li>
            <strong>Display a random API quote:</strong> This tool will display
            a random quote from an API, which is a set of programming
            instructions that allow you to access data or functionality from
            another website or application.
          </li>
          <li>
            <strong>Generate a random password:</strong> This tool will generate
            a random password that is strong and secure.
          </li>
          <li>
            <strong>Convert between different units of measurement:</strong>
            This tool will convert between different units of measurement, such
            as meters and feet, or pounds and kilograms.
          </li>
          <li>
            <strong>Dictionary:</strong> Our dictionary tool allows you to look
            up the definition of any word in the English language. Simply enter
            the word you want to look up and our tool will return the
            definition, as well as other related information such as synonyms,
            antonyms, and examples of how the word is used in a sentence. Our
            dictionary tool is powered by a large database of words and
            definitions, so you can be sure to find the information you&apos;re
            looking for. We also update our database regularly to ensure that
            you have access to the latest definitions.
          </li>
        </ul>
        We&apos;re always adding new tools, so be sure to check back often. And
        if you have any suggestions for new tools, please let us know. <br />
        Thanks for visiting the Toolshed!
      </p>
    </div>
  );
};

export default Headline;
