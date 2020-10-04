import Head from "next/head";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
  useQuery,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: "Bearer TODO",
  },
});

const githubQuery = gql`
  query profileQuery {
    user(login: "nikgraf") {
      id
      login
      avatarUrl
      repositories(last: 10) {
        nodes {
          id
          name
        }
      }
    }
  }
`;

const Profile = () => {
  const { loading, error, data } = useQuery(githubQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oop something went wrong :(</p>;

  return (
    <div>
      <Head>
        <title>{data.user.login}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src={data.user.avatarUrl} />
      <ul>
        {data.user.repositories.nodes.map((repo) => {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h1>Hello</h1>
        <Profile />
      </div>
    </ApolloProvider>
  );
}
