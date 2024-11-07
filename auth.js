import { connectDB } from "@/lib/connectDB"
import { UserModal } from "@/lib/modals/User.modal"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
 const handleLogin = async (profile) => {
     await connectDB()
     const user = await UserModal.findOne({email: profile.email})
     if(user) return user 
     const obj = {
      firstName: profile.given_name,
      lastName: profile.family_name,
      email: profile.email,
      picture: profile.picture,
     }
    let newUser = await new UserModal(obj)
    newUser = await newUser.save()
    return newUser  
 }

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
     await handleLogin(profile)  
      return true
    },
    async jwt({token}) {
      const user = await handleLogin({email: token.email})
      token._id = user._id
      token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user._id = token._id
      session.user.role = token.role
      return session
    },
  },

})