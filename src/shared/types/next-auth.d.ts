import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      uuid: string;
      jwt_token: string;
      user_token: string;
    };
  }
}
