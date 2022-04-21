const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@web3-onboard/react']);

module.exports = withPlugins([withTM], {
  webpack: (config, { webpack }) => {
    console.log(webpack.version); // webpack 5

    return config;
  },
  future: {
    webpack5: true,
  },
});
