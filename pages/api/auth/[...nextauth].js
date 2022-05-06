import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";
import NextAuth from "next-auth";

// export default NextAuth({
//     providers: [
//         AzureADB2CProvider({
//             tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,
//             clientId: process.env.AZURE_AD_B2C_CLIENT_ID,
//             clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET,
//             primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
//             authorization: { params: { scope: `https://${process.env.AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/api/demo.read https://${process.env.AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/api/demo.write offline_access openid` } },
//         }),
//     ]
// });

const options = {
    providers: [
        AzureADB2CProvider({
            tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,
            clientId: process.env.AZURE_AD_B2C_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET,
            primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
            authorization: { params: { scope: `https://${process.env.AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/api/demo.read https://${process.env.AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/api/demo.write offline_access openid` } },
            callbacks: {
                async jwt({ token, account }) {
                    // Persist the OAuth access_token to the token right after signin
                    if (account) {
                        token.accessToken = account.access_token
                    }
                    return token
                },
                async session({ session, token, user }) {
                    // Send properties to the client, like an access_token from a provider.
                    session.accessToken = token.accessToken
                    return session
                }
            }
        }),
    ],
}

export default (req, res) => NextAuth(req, res, options)