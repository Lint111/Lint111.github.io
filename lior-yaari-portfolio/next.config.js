module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // Replace with your image domain if needed
  },
  webpack: (config) => {
    // Custom webpack configuration can go here
    return config;
  },
};