'use client';

import { Text, makeStyles, typographyStyles } from '@fluentui/react-components';
import pageStyles from '../page.module.scss';

const useStyles = makeStyles({
  title: typographyStyles.title2,
});

export default function About() {
  const styles = useStyles();

  return (
    <main className={pageStyles.about}>
      <Text as="h1" block className={styles.title}>
        About
      </Text>

      <div></div>
    </main>
  );
}
