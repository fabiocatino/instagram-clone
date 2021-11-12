import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		// CredentialsProvider({
		// 	// The name to display on the sign in form (e.g. 'Sign in with...')
		// 	name: 'Credentials',
		// 	// The credentials is used to generate a suitable form on the sign in page.
		// 	// You can specify whatever fields you are expecting to be submitted.
		// 	// e.g. domain, username, password, 2FA token, etc.
		// 	// You can pass any HTML attribute to the <input> tag through the object.
		// 	credentials: {
		// 		username: { label: 'Username', type: 'text', placeholder: 'Username' },
		// 		password: { label: 'Password', type: 'password' },
		// 	},
		// 	async authorize(credentials, req) {
		// 		// Add logic here to look up the user from the credentials supplied
		// 		const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' };

		// 		if (user) {
		// 			// Any object returned will be saved in `user` property of the JWT
		// 			return user;
		// 		} else {
		// 			// If you return null or false then the credentials will be rejected
		// 			return null;
		// 			// You can also Reject this callback with an Error or with a URL:
		// 			// throw new Error('error message') // Redirect to error page
		// 			// throw '/path/to/redirect'        // Redirect to a URL
		// 		}
		// 	},
		// }),

		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		}),
		// ...add more providers here
	],

	pages: {
		signIn: '/auth/signin',
	},
	callbacks: {
		async session({ session, token, user }) {
			session.user.username = session.user.name
				.split(' ')
				.join('')
				.toLocaleLowerCase();
			session.user.uid = token.sub;

			return session;
		},
	},
});
