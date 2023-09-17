module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer'
    }
    // images.unoptimized = true
    return config
  },
  
}
