import Image from "next/image.js";
import styles from "./page.module.css";
import Link from "next/link.js";

export default function Home() {
  return <>
  <section className="my-5">
    <div className="container">
      <div className="row">
        <div className="col text-center ">
          <Image src={"/logo.png"} className="" alt="logo sarahah" width={200} height={200} />
          <h1>Sarahah</h1>
        </div>
        <div className="col-12 text-center my-4">
          <Link href="/login" className="btn btn-info text-white my-3 w-100">Login</Link>
          <Link href="/register" className="btn btn-info text-white my-3 w-100">Register</Link>
        </div>
      </div>
    </div>
  </section>
  </> 
}
