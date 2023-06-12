import NavBar from "@/components/NavBar";
import Profile from "@/components/contents/Profile";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <NavBar />
      <Layout>
        <Profile />
      </Layout>
    </>
  );
}
