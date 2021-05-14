const awsmobile = {
    "aws_project_region": "us-west-2",
    "aws_cognito_identity_pool_id": "us-west-2:908c1aee-f26a-4b62-bd05-cec405895e65",
    "aws_cognito_region": "us-west-2",
    "aws_user_pools_id": "us-west-2_3BIFrz4JA",
    "aws_user_pools_web_client_id": "1frii5m09mfci2fkv2ucl9od61",
    "oauth": {
        "domain": "garden-overflow-dev.auth.us-west-2.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "https://localhost:3000/userprofile/",
        "redirectSignOut": "https://localhost:3000/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS"
};

export default awsmobile;