require('dotenv').config()
if (!process.env.PGHOST) {
	throw new Error('Env not set for tests. Please ensure there is a .env file at the root of the project')
}