"use client";
import "../styles/Public/styles.scss";
import { useEffect, useState, useRef } from "react";

import { motion, useInView } from "framer-motion";
import CourtHero from "../components/CourtHero";
import LatestResults from "../components/PublicData/LatestResults";
import { getHomepage } from "../../sanity/sanity-queries";
import AnimatedText from "../components/AnimatedText";

const imageAnimation = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Home() {
  const [data, setData] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    const fetchData = async () => {
      const homepageData = await getHomepage();
      setData(homepageData);
    };

    fetchData();
  }, []);

  return (
    <main className="main-layout-client">
      <CourtHero data={data} />
      <motion.div
        className="image-hero pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        <motion.img
          ref={ref}
          src="/1.png"
          variants={imageAnimation}
          animate={isInView ? "visible" : "hidden"}
          viewport={{ once: false }}
        ></motion.img>
      </motion.div>

      <div className="board">
        <motion.div
          className="main-text"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.45 }}
          viewport={{ once: false }}
        >
          {data.callout}
        </motion.div>
      </div>

      <div className="latest-container" id="latest-results">
        <div className="relative">
          <div>
            <AnimatedText text="Latest Results" className="title" />
          </div>
          {/* <motion.div
            variants={{
              hidden: { left: 0 },
              visible: { left: "100%" },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 1, ease: "easeIn" }}
            style={{
              position: "absolute",
              top: 6,
              bottom: 0,
              left: 0,
              right: 0,
              background: "#0f2d32",
              zIndex: 20,
            }}
          ></motion.div> */}
        </div>
        <LatestResults />
      </div>
    </main>
  );
}
