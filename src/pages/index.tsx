import { withUrqlClient } from "next-urql";
import { NavBar } from "../components/NavBar";
import { createUrqlClient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../generated/graphql";

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <>
      <NavBar />
      <div>Hello world</div>
      {!data ? null : data.posts.map((p) => <div key={p._id}>{p.title}</div>)}
    </>
  );
};
// server side render for SEO content only

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
