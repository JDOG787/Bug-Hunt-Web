import { useRouter } from "next/router";
import { useQuery, gql } from '@apollo/client';
import { LOGIN } from "../components/graphql/queries";



export default function Login() {
  const { query } = useRouter();
  const code = query.code;

  if (code) { 
    const { loading, error, data } = useQuery(LOGIN, {
      variables: {
        code
      }
    });
    if (error) console.log(error)
    if (loading) {
      return (
        <div>Loading...</div>
      )
    }
    
  } else {
    return (
      <div>
        <a href="https://github.com/login/oauth/authorize?client_id=f0fd634792e80e1960b0&scope=read:user,user:email">Login with github</a>
      </div>
    )
  }
}