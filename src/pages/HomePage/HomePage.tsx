import React, { PropsWithChildren } from "react";
import Styles from "./HomePage.module.scss";

type HomePageProps = {};

export const HomePage = (props: PropsWithChildren<HomePageProps>) => {
  return (
    <div className={Styles.HomePage}>
      <div className={Styles.header}>
        <h1>Discover the Data Space for Skills Blueprint</h1>
      </div>
    </div>
  );
};
