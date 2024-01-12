"use client";
import { termins } from "@/data/data";
import styles from "./Glossary.module.css";
export default function Glossary() {
  return (
    <>
      {termins.map((termin) => (
        <div className={styles.terminContainer}> {termin.data.label}</div>
      ))}
    </>
  );
}
