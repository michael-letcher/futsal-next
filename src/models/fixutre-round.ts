import { IFixtureGame } from './fixture-game';

export interface IFixtureRound {
  id: string;
  round: number;
  games: IFixtureGame[];
}
