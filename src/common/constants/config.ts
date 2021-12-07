export const { PORT = 4000, SECRET = 'secret123', NODE_ENV = 'dev', FORECAST_API_KEY } = process.env
export const AUTH_HEADER = 'authorization'
export const IS_PROD = NODE_ENV === 'production'
