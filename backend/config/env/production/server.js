module.exports = ({ env }) => ({
    proxy: true,
    url: env('STRAPI_URL'),
    app: { 
       keys: env.array('APP_KEYS')
    },
 });