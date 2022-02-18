const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const response = await fetch(process.env.DEPLOY_ME_URL, {
    method: "POST",
  });

  return {
    statusCode: 200,
    body: "Your site is now deploying! Have a great day!",
  };
};
