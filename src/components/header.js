import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"

const Header = ({ siteTitle }) => {
  // const data = useStaticQuery(graphql`
  //   query hello {
  //       allWpMenu {
  //         edges {
  //           node {
  //             menuItems {
  //               nodes {
  //                 url
  //                 title
  //                 path
  //               }
  //             }
  //             id
  //           }
  //         }
  //       }
  //     }
  // `)
  // const hello = data;
  // const hi = hello.data;
  // const items = data.allWpMenu.edges.node;
  // console.log(items, hi, hello);

  const data = useStaticQuery(graphql`
  query {
    allWpMenu {
    edges {
      node {
        menuItems {
          nodes {
            url
            label
            path
            id
          }
        }
        id
      }
    }
  }
  }
    `)

  const items = data.allWpMenu.edges[0].node.menuItems.nodes;

  return(
  <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    {items.map(item => (
            <AniLink to={item.url} key={item.id} cover top="enter" direction="left" duration={1}>
            <div className="link--general link--takiri">{item.label}</div>
            </AniLink>
    ))}
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
)
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
