import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  SectionTitle,
  SectionSubtitle,
} from '~/common/Typography.jsx';
import * as PortfolioItem from '~/common/PortfolioItem.jsx';
import {
  PortfolioWrapper,
  Header,
} from './Portfolio.style.jsx';
import 'twin.macro';
import Aida from '../../portfolio-list/Aida.mdx';
import BookLandingPage from '../../portfolio-list/BookLandingPage.mdx';
import Chromio from '../../portfolio-list/Chromio.mdx';
import Duotone from '../../portfolio-list/Duotone.mdx';
import Erfudia from '../../portfolio-list/Erfudia.mdx';
import Generativa from '../../portfolio-list/Generativa.mdx';
import MovDB from '../../portfolio-list/MovDB.mdx';
import MultiSearch from '../../portfolio-list/Multisearch.mdx';
import Musica from '../../portfolio-list/Musica.mdx';
import Quotin from '../../portfolio-list/Quotin.mdx';
import Valsa from '../../portfolio-list/Valsa.mdx';

const Portfolio = () => {
  return (
    <PortfolioWrapper id="portfolio">
      <Header>
        <SectionTitle as="h2">
          Portfolio
        </SectionTitle>
        <SectionSubtitle>
          Take a look at some of the projects I&apos;ve build.
        </SectionSubtitle>
      </Header>
      <MDXProvider
        components={{
          ...PortfolioItem,
          ul: PortfolioItem.ListItems,
          li: PortfolioItem.ListItem,
        }}
      >
        <MultiSearch />
        <Generativa />
        <Chromio />
        <Quotin />
        <Musica />
        <Duotone />
        <Aida />
        <MovDB />
        <Erfudia />
        <BookLandingPage />
        <Valsa />
      </MDXProvider>
    </PortfolioWrapper>
  );
};

export default Portfolio;
