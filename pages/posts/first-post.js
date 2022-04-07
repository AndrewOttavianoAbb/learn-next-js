import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default () => (
  <>
    <Head>
      <title>First Post</title>
    </Head>

    <h1>First Post!</h1>

    <Image src="/images/profile.jpg" height={144} width={144} />
    <br />

    <Link href="/">
      <a>Back to home.</a>
    </Link>
  </>
);
