import React, { Component } from 'react';
import Link from 'gatsby-link';
import classnames from 'classnames';

import DocSearch from './docsearch';

import logo from '../img/netlify-cms-logo.svg';

import '../css/imports/notifications.css';
import '../css/imports/header.css';

class Header extends Component {
  state = {
    scrolled: false
  };

  componentDidMount() {
    // TODO: use raf to throttle events
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    const currentWindowPos =
      document.documentElement.scrollTop || document.body.scrollTop;

    const scrolled = currentWindowPos > 0;

    this.setState({
      scrolled
    });
  };

  render() {
    const { location, notifications } = this.props;
    const { scrolled } = this.state;

    const isDocs = location.pathname.indexOf('docs') !== -1;
    const isBlog = location.pathname.indexOf('blog') !== -1;

    return (
      <div
        className={classnames('header-container', {
          scrolled,
          docs: isDocs,
          blog: isBlog
        })}
      >
        {notifications.map((node, i) => (
          <a
            key={i}
            href={node.url}
            className={classnames('notification', {
              'notification-loud': node.loud
            })}
          >
            {node.message}
          </a>
        ))}
        <header
          id="header"
          className={classnames({
            docs: isDocs || isBlog
          })}
        >
          <div className="contained">
            <div className="logo-container">
              <Link to="/" className="logo">
                <img src={logo} />
              </Link>
              {isDocs && <DocSearch />}
            </div>
            <div className="nav-container">
              <Link className="nav-link docs-link" to="/docs/intro">
                Docs
              </Link>
              <Link
                className="nav-link contributing-link"
                to="/docs/contributor-guide"
              >
                Contributing
              </Link>
              <Link className="nav-link" to="/community">
                Community
              </Link>
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
              <a
                id="ghstars"
                className="github-button"
                href="https://github.com/netlify/netlify-cms"
                data-icon="octicon-star"
                data-show-count="true"
                aria-label="Star netlify/netlify-cms on GitHub"
              >
                Star
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
