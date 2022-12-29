import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API_ENDPOINT}/api/04/users`);

  return {
    props: {
      users: data,
    },
  };
}

function HomePage({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
            {user.username}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;
