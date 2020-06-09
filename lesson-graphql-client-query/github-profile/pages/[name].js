import Head from "next/head";
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://www.graphqlhub.com/graphql",
});

const githubQuery = gql`
  query profileQuery($name: String!) {
    github {
      user(username: $name) {
        id
        avatar_url
        login
        repos {
          id
          name
        }
      }
    }
  }
`;

const Profile = (props) => {
  const { loading, error, data } = useQuery(githubQuery, {
    variables: {
      name: props.username,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oop something went wrong :(</p>;

  return (
    <div>
      <Head>
        <title>{data.github.user.login}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src={data.github.user.avatar_url} />
      <ul>
        {data.github.user.repos.map((repo) => {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default function Home(props) {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h1>Hello</h1>
        <Profile username={props.username} />
      </div>
    </ApolloProvider>
  );
}

export async function getServerSideProps(context) {
  return { props: { username: context.params.name } };
}
