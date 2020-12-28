import Head from "next/head";
import { RecentEvents } from "../src/Events/components/RecentEvents";
import { InfoCard } from "../src/Human/components/InfoCard";
import { Summary } from "../src/Human/components/summary";
import { Navbar } from "../src/Layout/components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      {/* <InfoCard></InfoCard> */}
      {/* <Summary></Summary> */}
      <RecentEvents></RecentEvents>
    </div>
  );
}
