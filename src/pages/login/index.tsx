export default function Login() {
  return <></>
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/api/auth/login',
      permanent: false
    }
  }
}
