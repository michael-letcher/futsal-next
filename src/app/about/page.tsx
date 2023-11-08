'use client';

import { Title1, makeStyles, typographyStyles } from '@fluentui/react-components';
import pageStyles from '../page.module.scss';

const useStyles = makeStyles({
  title: typographyStyles.title2,
});

export default function About() {
  const styles = useStyles();

  return (
    <main className={pageStyles.main}>
      <Title1 as="h1">About</Title1>

      <div></div>
    </main>
  );
}
