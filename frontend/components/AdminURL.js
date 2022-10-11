const prod = {
	url: 'https://adcock-and-ivison-uunx5.ondigitalocean.app/strapi/admin',
}

const dev = {
   url: 'http://localhost:1337/admin'
}

export const adminConfig = process.env.NODE_ENV === 'development' ? dev : prod