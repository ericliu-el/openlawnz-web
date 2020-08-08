import React from "react"
import { Article, Layout, SideMenu } from "../../../components"

import MenuData from "../menuData"

import styles from "./financials.module.scss"
import { Link } from "gatsby"

const Financials = () => {
  return (
    <Layout className={styles.financials}>
      <Layout.Twos>
        <Layout.Left>
          <Article>
            <Article.Title>Financials and Documents</Article.Title>
            <Article.Content>
              OpenLaw NZ is a registered charity and most of our important documents are public. You can access them
              here or at the charities website.
            </Article.Content>
          </Article>
          <div className={styles.reports}>
            <h1>Financial Reports</h1>
            <ul>
              <li>
                <Link to="/">year Ending 31 March 2019</Link>
              </li>
              <li>
                <Link to="/">year Ending 31 March 2020</Link>
              </li>
            </ul>
          </div>
          <div className={styles.reports}>
            <h1>Legal Documents</h1>
            <ul>
              <li>
                <Link to="/">openlaw nZ constitution</Link>
              </li>
            </ul>
          </div>
        </Layout.Left>
        <Layout.Right>
          <SideMenu menuData={MenuData} />
        </Layout.Right>
      </Layout.Twos>
    </Layout>
  )
}

export default Financials
