"use client";
import CytoscapeComponent from "react-cytoscapejs";
import React from "react";
import styles from "./page.module.css";
import { targets, termins } from "@/data/data";
import Glossary from "@/app/components/Glossary";
import { useState } from "react";

export default function Home() {
  const layout = { name: "preset" };
  const [isGlossary, setIsGlossary] = useState(true);

  return (
    <main>
      <div className={styles.title}>
        <h1 className={styles.h1}>
          Практика 4 семестр 2024, выполнил Хованский И.А.
        </h1>
      </div>
      <button onClick={() => setIsGlossary(true)} className={styles.button}>
        Глоссарий
      </button>
      <button onClick={() => setIsGlossary(false)} className={styles.button}>
        Граф
      </button>
      {isGlossary && <Glossary />}
      {!isGlossary && (
        <CytoscapeComponent
          elements={[...termins, ...targets]}
          layout={layout}
          style={{
            width: "100%",
            height: "100vh",
          }}
          stylesheet={[
            {
              selector: "node",
              style: {
                color: "rgba(255, 255, 255, 1)",
                "text-max-width": "200px",
                "text-valign": "left",
                "text-halign": "right",
                "text-wrap": "wrap",
                content: "data(label)",
                "background-opacity": 0.8,
              },
            },
            {
              selector: "edge",
              style: {
                width: 2,
              },
            },
          ]}
        />
      )}
    </main>
  );
}
