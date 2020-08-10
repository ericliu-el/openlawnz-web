import React from "react"
import cn from "classnames"

import styles from "./article.module.scss"

const Article = ({ children, className }) => <article className={cn(styles.article, className)}>{children}</article>

const Title = ({ children }) => <h1>{children}</h1>
const Content = ({ children }) => <div>{children}</div>

Article.Title = Title
Article.Content = Content

export default Article
