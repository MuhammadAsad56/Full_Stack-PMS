/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns : [
            {
                hostname: 'encrypted-tbn0.gstatic.com',
                hostname: 'lh3.googleusercontent.com'
            }
        ]
    }
};

export default nextConfig;
