import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_SkfIaWyVQ",
    ClientId: "5qlr5a74kvknr0enqrrn3b90mr"
}

export default new CognitoUserPool(poolData);