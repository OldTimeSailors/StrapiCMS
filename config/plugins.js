module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
        breakpoints: {
          xl: 4000,
          large: 1000,
          medium: 750,
          small: 500
          
        }
      },
    },
    'import-export-entries': {
      enabled: true,
      cconfig: {
        serverPublicHostname: 'http://localhost:1337', // REEMPLAZAR CON URL DEL SITIO CUANDO SE SUBA
      },
    },
  });