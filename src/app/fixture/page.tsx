'use client';

import { Button } from '@fluentui/react-components';
import pageStyles from '../page.module.scss';

export default function Fixture() {
  return (
    <main className={pageStyles.main}>
      <h1>Fixture</h1>
      <Button>Example</Button>
    </main>
  );
}
