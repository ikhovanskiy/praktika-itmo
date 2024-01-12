"use client";
import CytoscapeComponent from "react-cytoscapejs";
import styles from "./page.module.css";
import { targets, termins } from "@/data/data";

export default function Home() {
  const layout = { name: "preset" };

  return (
    <main>
      <div className={styles.title}>
        <h1 className={styles.h1}>
          Практика 3 семестр 2023, выполнил Хованский И.А.
        </h1>
      </div>
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
    </main>
  );
}
