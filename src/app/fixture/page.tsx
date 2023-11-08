'use client';

import FixtureGrid from '@/components/fixture-grid/fixture-grid';
import { Tab, TabList, Title1, makeStyles, shorthands } from '@fluentui/react-components';
import { divisions } from '../data/constants';
import pageStyles from '../page.module.scss';

const useStyles = makeStyles({
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    ...shorthands.padding('50px', '0px'),
    rowGap: '20px',
  },
});

export default function Fixture() {
  const styles = useStyles();

  return (
    <main className={pageStyles.main}>
      <Title1 as="h1">Fixture</Title1>

      <div className={styles.root}>
        <TabList defaultSelectedValue={'1'}>
          {divisions.map((division) => (
            <Tab key={division.name} value={division.id}>
              {division.name}
            </Tab>
          ))}
        </TabList>

        <FixtureGrid></FixtureGrid>
      </div>
    </main>
  );
}
