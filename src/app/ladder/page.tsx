'use client';

import LadderTable from '@/components/ladder-table/ladder-table';
import { Title1, makeStyles } from '@fluentui/react-components';
import pageStyles from '../page.module.scss';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function Ladder() {
  const styles = useStyles();

  return (
    <main className={pageStyles.main}>
      <Title1 as="h1">Ladder</Title1>

      <div className={styles.root}>
        <LadderTable></LadderTable>
      </div>
    </main>
  );
}
