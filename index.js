const { Amplify, Auth } = require('aws-amplify');

require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});

const start = async () => {
    Amplify.configure({
        Auth: {
            region: process.env.REGION,
            userPoolId: process.env.USER_POOL_ID,
            userPoolWebClientId: process.env.USER_POOL_CLIENT_ID
        }
    });
    const config = Auth.configure();

    console.log(config);
    
    const user = await Auth.signIn(process.env.USER_NAME, process.env.USER_PASSWORD);

    console.log(user);
};

start().then(console.log).catch(console.error);