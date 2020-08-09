import React from "react"
import { Article, Layout, SideMenu } from "../../../components"

import MenuData from "../menuData"

import styles from "./data.module.scss"

const Data = () => {
  return (
    <Layout className={styles.data}>
      <Layout.Twos>
        <Layout.Left>
          <Article>
            <Article.Title>Our Data</Article.Title>
            <Article.Content>
              <p>
                The Ministry of Justice has kindly allowed us access to their database of case law from Judicial
                Decisions Online and other websites. Because case law is not subject to copyright restrictions, we have
                been able to re-purpose those PDFs and convert them into usable pieces of data that a computer can read.
              </p>
              <p>
                The case law data we have currently comprises High Court, Court of Appeal and Supreme Court decisions
                from present day back to approximately 2004 (with some exceptions, for example some suppressed decisions
                and other judgments that have not been published).
              </p>
              <p>
                We look at those PDF files and analyse them to see what pieces of information might be useful – for
                example, references to pieces of legislation, dates, and citations. We’re always working on expanding
                the data we can extract.
              </p>
            </Article.Content>
          </Article>
          <Article>
            <Article.Title>Stewardship</Article.Title>
            <Article.Content>
              <p>We want to make legal information as accessible as we can.</p>
              <p>
                That means our data is open and accessible to everybody. You can interact with our data through our
                website and search. Or you can tap directly into our database through our API. All of our code is open
                source and licensed to the public under the GPL open source licence.
              </p>
              <p>
                Because we are a charity and have limited resources, access to our database and API is only for
                non-commercial purposes. This lets us make sure that our data isn’t copied by a commercial provider and
                locked away behind a paywall. If you need access to our data for commercial purposes but consider your
                use will still benefit the public by enhancing the accessibility of legal information, we may provide
                you with a license to use it in that way if you get in touch.
              </p>
              <p>You can use our search for any purpose including commercial purposes.</p>
            </Article.Content>
          </Article>
        </Layout.Left>
        <Layout.Right>
          <SideMenu menuData={MenuData} />
        </Layout.Right>
      </Layout.Twos>
    </Layout>
  )
}

export default Data
