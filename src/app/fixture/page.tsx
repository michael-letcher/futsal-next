'use client';

import FixtureList from '@/components/fixture-list/FixtureList';
import { Title1, makeStyles } from '@fluentui/react-components';
import pageStyles from '../page.module.scss';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function Fixture() {
  const styles = useStyles();

  return (
    <main className={pageStyles.main}>
      <Title1 as="h1">Fixture</Title1>

      <div className={styles.root}>
        <FixtureList />
      </div>
    </main>
  );
}
