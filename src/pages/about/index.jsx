import React from "react"
import { Article, Card, Layout, SideMenu } from "../../components"

import AvatarAndrew from "../../../static/assets/andrew-easterbrook.png"
import AvatarWill from "../../../static/assets/will.png"

import MenuData from "./menuData.json"

import styles from "./about.module.scss"

const AboutUs = () => {
  return (
    <Layout className={styles.about}>
      <Layout.Twos>
        <Layout.Left>
          <Article className={styles.article}>
            <Article.Title>About Us</Article.Title>
            <Article.Content>
              <p>
                OpenLaw NZ is an open-source legal data platform. Our goal is to improve the accessibility of case law
                and other legal information in New Zealand. We want to make it easier for all New Zealanders to
                understand law.
              </p>
              <p>
                You can use our search to find case law, and navigate between related information. You can also use our
                plugins (or write your own) to aid your research.
              </p>
              <p>
                You can use our API to build case law intelligence into your own applications and services. For an
                example, see our chrome extension.
              </p>
            </Article.Content>
          </Article>

          <h1>OpenLaw NZ Directors</h1>
          <div className={styles.directors}>
            <Card.Avatar
              title="Andrew Easterbrook, CEO"
              content="Andrew is a lawyer, and has worked in technology law, civil litigation and family law since 2009. He has been a Member of the Auckland District Law Society Technology & Law Committee since 2012, and is experienced in web and software development. Andrew went to university at Victoria, Wellington, and now lives in Whangarei."
              imgSrc={AvatarAndrew}
            />
            <Card.Avatar
              title="William Parry, CTO"
              content="William brings 16 years of tech experience across enterprise, advertising and small businesses including 8 years working with open data in projects and hackathons. He has run community coding classes and is passionate about empowering disadvantaged people with technology. William went to university at Victoria, Wellington, and now lives in Sydney."
              imgSrc={AvatarWill}
            />
          </div>
        </Layout.Left>
        <Layout.Right>
          <SideMenu menuData={MenuData} />
        </Layout.Right>
      </Layout.Twos>
    </Layout>
  )
}

export default AboutUs
