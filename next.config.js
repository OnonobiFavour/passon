/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');


module.export = withPWA({
  reactStrictMode: true,
  pwa:{
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV ==='developement'
  }
})
