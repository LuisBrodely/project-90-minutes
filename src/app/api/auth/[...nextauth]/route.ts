import minutesApi from "@/shared/config/users-service/minutes.api";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export interface UserResponse {
  data: User;
  message: string;
  success: boolean;
  statusCode: number;
}

export interface User {
  id: string;
  uuid: string;
  jwt_token: string;
  user_token: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await minutesApi.post<UserResponse>(`/users/sign_in`, {
          email: credentials?.email,
          password: credentials?.password,
        });

        console.log(response.data);

        if (response.data.data) {
          return response.data.data;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      return token;
    },
    async session({ session, token }) {
      console.log(token);
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
