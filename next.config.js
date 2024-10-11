    module.exports = {
    images: {
        domains: ['fakestoreapi.com', 'lh3.googleusercontent.com']
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