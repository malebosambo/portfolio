const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '3000',
  jwtSecret: process.env.JWT_SECRET || 'YOUR_JWT_SECRET'
}

export default config;