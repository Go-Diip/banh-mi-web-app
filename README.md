<h1 align="center">
  Shellshock - Gatsby + Wordpress default starter
</h1>

1.  **Start developing.**

    Create a file in the root called `.env.development` with the corresponding WORDPRESS_URL

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-project/
    npm install
    gatsby develop
    ```

2.  **Open the source code and start editing**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!


2.  **Creating Layouts**
    - Create a directory with the name of your new layout under `/src/layouts`. 
    - Make sure your layout contains 4 files: `index.js`, `layout-name.component.jsx`, `layout-name.data.js` and `layout-name.styles.jsx`.
    - Add the layout fragment in the corresponding template (e.g. page.template.jsx).
    - Add the layout to `get-layout-utils.js`

    NOTE: Make sure to reference the `MiscContent` included layout.

## Featured libraries

1.  **`material-ui`**: CSS framework
2.  **`gatsby-plugin-image`**: Handle lazy loading / resize images / WebP - etc.
3.  **`react-hook-forms`**: Form validation
4.  **`gatsby-pagination`**: Handle pagination
5.  **`styled-components`**: CSS-in-JS
6.  **`react-modal-video`** Open YouTube - Vimeo or local videos in a modal - popup
7.  **`swiper`**: Carousel - Slider
8.  **`html-react-parser`**: Parse HTML from string (validate to prevent errors)
9.  **`gatsby-plugin-transition-link`**: Add transitions when changing between pages
