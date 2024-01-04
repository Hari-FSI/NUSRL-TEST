/** @type {import('next').NextConfig} */

// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
 
module.exports = withPlugins([
  [optimizedImages, {
    // these are the default values so you don't have to provide them if they are good enough for your use-case.
    // but you can overwrite them here with any valid value you want.
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    removeOriginalExtension: false,
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  }],
]);

module.exports = {
  useFileSystemPublicRoutes: false,
}

const nextConfig = {
swcMinify:true,  
reactStrictMode:true,
//output: 'export',
images:{
  unoptimized: true,
  domains:['https://assets.rapidroute.in/']
},

webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  config.plugins.push(
   new webpack.ProvidePlugin({
   $: "jquery",
   jQuery: "jquery",
   "window.jQuery": "jquery",
})
);
return config;
},
};

module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.optimization.minimize = true;
        webpackConfig.module.rules[1].oneOf[1] = {
          test: /\.(jpe?g|png|webp)$/i,
          use: {
            loader: 'responsive-loader',
            options: {
              adapter: require('responsive-loader/sharp'),
            },
          },
        };
  
        return webpackConfig;
      },
    },
  };
 
  
module.exports = {
  exportTrailingSlash: true,
    
  webpack: (config, options) => {
      config.module.rules.push({
          test: /\.svg$/,
          issuer: { and: [/\.(js|ts|md)x?$/] },
          use: [
              {
                  loader: '@svgr/webpack',
                  options: {
                      prettier: false,
                      svgo: true,
                      svgoConfig: { plugins: [{ removeViewBox: false }] },
                      titleProp: true,
                  },
              },
          ],
      })

      if (!options.dev && options.isServer) {
          const originalEntry = config.entry

          config.entry = async () => {
              const entries = { ...(await originalEntry()) }
              entries['./scripts/build-rss'] = './scripts/build-rss.js'
              return entries
          }
      }

      if (!options.isServer) {
          config.resolve.fallback.fs = false
      }

      return config
  },

  typescript: { reactDocgen: false },

   




  
    }

    
module.exports = nextConfig;
