export interface IFixtureGame {
  id: string;
  homeTeamId: string;
  homeTeamName?: string;
  awayTeamId: string;
  awayTeamName?: string;
  homeTeamScore: number;
  awayTeamScore: number;

  // ! Shouldn't be optional
  date?: Date;
  // ! Shouldn't be optional
  location?: string;
}
