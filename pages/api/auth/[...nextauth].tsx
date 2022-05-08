import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID as string,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      return user.id === process.env.GOOGLE_USER_ID;
    },
  },
});
