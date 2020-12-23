import Head from "next/head";
import { InfoCard } from "../src/Human/components/InfoCard";
import { Navbar } from "../src/Layout/components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <InfoCard></InfoCard>
    </div>
  );
}
