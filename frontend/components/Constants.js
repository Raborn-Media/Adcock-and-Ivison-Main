const prod = {
	url: '',
}

const dev = {
   url: 'http://localhost:1337/api'
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod