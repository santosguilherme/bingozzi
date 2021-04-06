// This is an example of to protect an API route
import { getSession } from 'next-auth/client';

export default async function handler(req, res) {
    const session = await getSession({ req });

    const body = session
        ? { content: 'This is protected content. You can access this content because you are signed in.' }
        : { error: 'You must be sign in to view the protected content on this page.' };

    res.send(body);
}
