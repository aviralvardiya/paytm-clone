import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";



export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1>This is the merchant app</h1>
    </main>
  );
}
