import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import SearchBox from './SearchBox'

const SidebarContainer = styled.div`
  width:  250px;

  header {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 8px 0;
  }

  ul {
    margin: 0 0 16px 0;
  }
`

const Sidebar = () => (
  <SidebarContainer>
    {process.env.GATSBY_DOCSEARCH_API_KEY && process.env.GATSBY_DOCSEARCH_INDEX && (
      <SearchBox />
    )}
    <header>Intro</header>
    <ul>
      <li><Link to="/getting-started">Getting Started</Link></li>
    </ul>

    <header>Catalog</header>
    <ul>
      <li><Link to="/sections">Sections</Link></li>
    </ul>
    <ul>
      <li><Link to="/attribute-types">Attribute Types</Link></li>
    </ul>
    <ul>
      <li><Link to="/manufacturers">Manufacturers</Link></li>
    </ul>
    <ul>
      <li><Link to="/price-lists">Price Lists</Link></li>
    </ul>
    <ul>
      <li><Link to="/warehouses">Warehouses</Link></li>
    </ul>
    <ul>
      <li><Link to="/products">Products</Link></li>
    </ul>
    

    <header>Customers</header>
    <ul>
      <li><Link to="/companies">Companies</Link></li>
    </ul>
    <ul>
      <li><Link to="/customers">Customers</Link></li>
    </ul>
    <ul>
      <li><Link to="/customer-groups">Customer Groups</Link></li>
    </ul>
    <ul>
      <li><Link to="/product-ratings">Product Ratings</Link></li>
    </ul>

    <header>Sales</header>
    <ul>
      <li><Link to="/carts">Carts</Link></li>
    </ul>
    <ul>
      <li><Link to="/orders">Orders</Link></li>
    </ul>
    <ul>
      <li><Link to="/payment-types">Payment Types</Link></li>
    </ul>
    <ul>
      <li><Link to="/shipping-statuses">Shipping Statuses</Link></li>
    </ul>
    <ul>
      <li><Link to="/shipping-types">Shipping Types</Link></li>
    </ul>

    <header>Marketing</header>
    <ul>
      <li><Link to="/documents">Documents</Link></li>
    </ul>
    <ul>
      <li><Link to="/promotions">Promotions</Link></li>
    </ul>

    <header>Settings</header>
    <ul>
      <li><Link to="/administrators">Administrators</Link></li>
    </ul>
    <ul>
      <li><Link to="/administrator-groups">Administrator Groups</Link></li>
    </ul>
    <ul>
      <li><Link to="/countries">Countries</Link></li>
    </ul>
    <ul>
      <li><Link to="/currencies">Currencies</Link></li>
    </ul>
    <ul>
      <li><Link to="/languages">Languages</Link></li>
    </ul>
    <ul>
      <li><Link to="/system-settings">System Settings</Link></li>
    </ul>
    <ul>
      <li><Link to="/system-texts">System Texts</Link></li>
    </ul>













    <header>About</header>
    <ul>
      <li><Link to="/about">About us</Link></li>
    </ul>
  </SidebarContainer>
)

export default Sidebar