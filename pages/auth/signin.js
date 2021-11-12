import { getProviders, signIn } from 'next-auth/react';
import {
	FacebookLoginButton,
	GoogleLoginButton,
} from 'react-social-login-buttons';
import Image from 'next/image';

export default function SignIn({ providers }) {

	return (
		<div className="flex items-center justify-center flex-col">
			<div className='m-20 flex flex-col'>
				<Image
					src="https://links.papareact.com/ocw"
					height={200}
					width={400}
					alt="logo"
					objectFit="contain"
                    className='flex justify-center'
				/>
                <h1 className='text-center text-2xl'>Not the real Instagram. Built for personal portfolio.</h1>
			</div>
			<div>
				<div>
					<GoogleLoginButton
						GoogleLoginButton
						onClick={() => signIn(providers.google.id, { callbackUrl: '/' })}
					>
						Sign in with {providers.google.name}
					</GoogleLoginButton>
					<FacebookLoginButton
						GoogleLoginButton
						onClick={() => signIn(providers.facebook.id, { callbackUrl: '/' })}
					>
						Sign in with {providers.facebook.name}
					</FacebookLoginButton>
				</div>
			</div>
		</div>
	);
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}
