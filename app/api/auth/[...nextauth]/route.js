import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import {connectToDB} from '@utils/database';

const handler = NextAuth({
    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session ({session}){

    },
    async signIn ({profile}){
        try {
            await connectToDB();

            //we need to make 2 checks here
            //1. if user already exists

            //2. if not, create a new user and save it to a database

            return true;

        } catch (error) {
            console.log(error);
            return false;
        }
    }
})

export {handler as GET, handler as POST};