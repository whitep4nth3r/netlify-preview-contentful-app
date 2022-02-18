const fetch = require("node-fetch");

export const handler = async (event) => {
  const response = await fetch(process.env.REACT_APP_NETLIFY_BUILD_HOOK, {
    method: "POST",
  });

  return {
    statusCode: 200,
    body: "Your site is now deploying! Have a great day!",
  };
};
