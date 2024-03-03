"use client";
import React from "react";
import { termins } from "@/data/data";
import styles from "./Glossary.module.css";
export default function Glossary() {
  return (
    <>
      {termins.map((termin, i) => (
        <div className={styles.terminContainer} key={i}>
          {" "}
          {termin.data.label}
        </div>
      ))}
    </>
  );
}
