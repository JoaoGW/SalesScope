module.exports = {
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