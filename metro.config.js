const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts },
    transformer: { babelTransformerPath },
  } = await getDefaultConfig();

  return {
    resolver: {
      sourceExts: [...sourceExts, 'env'],
      extraNodeModules: {
        '@env': `${__dirname}/.env`,
      },
    },
    transformer: {
      babelTransformerPath,
    },
  };
})();