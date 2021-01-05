import {useRouter} from 'next/router'
import MainContainer from '../../components/MainContainer';

export default function ({user}) {
    console.log(user);
    return (
        <MainContainer title={user.name}>
            <h1>Пользователь {user.id}</h1>
            <h2>Имя {user.name}</h2>
        </MainContainer>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`http://jsonplaceholder.typicode.com/users/${context.params.id}`)
    const user = await response.json()
    return {
      props: {user}, // will be passed to the page component as props
    }
  }

