module.exports = {
    images: {
        domains: ['fakestoreapi.com']
    },
    async redirects(){
        return[
            {
                source: '/',
                destination: '/auth/Login',
                permanent: true
            }
        ]
    }
}