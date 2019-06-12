module.exports = {
    useMockStatusCode: [404, 403, 500],
    rules: {
        cNode: {
            host: "https://cnodejs.org",
            urls: [
                '/api/v1/*'
            ],
            useMock: [
                '/api/info',
                '/api/token',
            ],
        },
    },
    user: {
        account: 'admin',
        password: '123456',
    },
};
//# sourceMappingURL=proxy.js.map