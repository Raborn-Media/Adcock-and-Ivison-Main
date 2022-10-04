const prod = {
	url: 'https://adcock-and-ivison-uunx5.ondigitalocean.app/api/api',
}

const dev = {
   url: 'http://localhost:1337/api'
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod