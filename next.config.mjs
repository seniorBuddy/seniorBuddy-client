/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // async rewrites() {
    //   return [
    //     {
    //       source: "/api/:path*",  // 모든 하위 경로를 포함하도록 :path* 와일드카드 추가
    //       destination: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/:path*`,  // 해당 경로로 전달
    //     },
    //   ];
    // },
};

export default nextConfig;
