import { tableItems } from '@/app/data/constants';
import {
  Avatar,
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  TableCellLayout,
  TableColumnDefinition,
  createTableColumn,
} from '@fluentui/react-components';
import { ArrowDownFilled, ArrowUpFilled, LineHorizontal1Filled } from '@fluentui/react-icons';

type PositionCell = {
  label: number;
  previousPosition: number;
};

type TeamCell = {
  label: string;
  icon?: string;
};

export type GridItem = {
  id: string;
  position: PositionCell;
  team: TeamCell;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  // Can be calculated
  goalDifference: number;
  // Can be calculated
  points: number;
  form: string[];
  nextTeam: string;
};

const columns: TableColumnDefinition<GridItem>[] = [
  createTableColumn<GridItem>({
    columnId: 'position',
    compare: (a, b) => {
      return a.position.label - b.position.label;
    },
    renderHeaderCell: () => {
      return 'Position';
    },
    renderCell: (item) => {
      const icon =
        item.position.label === item.position.previousPosition ? (
          <LineHorizontal1Filled />
        ) : item.position.label < item.position.previousPosition ? (
          <ArrowUpFilled color="green" />
        ) : (
          <ArrowDownFilled color="red" />
        );
      return <TableCellLayout media={icon}>{item.position.label}</TableCellLayout>;
    },
  }),
  createTableColumn<GridItem>({
    columnId: 'team',
    compare: (a, b) => {
      return a.team.label.localeCompare(b.team.label);
    },
    renderHeaderCell: () => {
      return 'Team';
    },
    renderCell: (item) => {
      return (
        <TableCellLayout appearance="primary" media={<Avatar aria-label={item.team.label} name={item.team.label} />}>
          {item.team.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<GridItem>({
    columnId: 'played',
    compare: (a, b) => {
      return a.played - b.played;
    },
    renderHeaderCell: () => {
      return 'Played';
    },
    renderCell: (item) => {
      return item.played;
    },
  }),
  createTableColumn<GridItem>({
    columnId: 'won',
    compare: (a, b) => {
      return a.won - b.won;
    },
    renderHeaderCell: () => {
      return 'Won';
    },
    renderCell: (item) => {
      return item.won;
    },
  }),
  createTableColumn<GridItem>({
    columnId: 'drawn',
    compare: (a, b) => {
      return a.drawn - b.drawn;
    },
    renderHeaderCell: () => {
      return 'Drawn';
    },
    renderCell: (item) => {
      return item.drawn;
    },
  }),
  createTableColumn<GridItem>({
    columnId: 'lost',
    compare: (a, b) => {
      return a.lost - b.lost;
    },
    renderHeaderCell: () => {
      return 'Lost';
    },
    renderCell: (item) => {
      return item.lost;
    },
  }),
  createTableColumn<GridItem>({
    columnId: 'goalsFor',
    compare: (a, b) => {
      return a.goalsFor - b.goalsFor;
    },
    renderHeaderCell: () => {
      return 'GF';
    },
    renderCell: (item) => {
      return item.goalsFor;
    },
  }),
  createTableColumn<GridItem>({
    columnId: 'goalsAgainst',
    compare: (a, b) => {
      return a.goalsAgainst - b.goalsAgainst;
    },
    renderHeaderCell: () => {
      return 'GA';
    },
    renderCell: (item) => {
      return item.goalsAgainst;
    },
  }),
  createTableColumn<GridItem>({
    columnId: 'goalDifference',
    compare: (a, b) => {
      return a.goalDifference - b.goalDifference;
    },
    renderHeaderCell: () => {
      return 'GD';
    },
    renderCell: (item) => {
      return item.goalsFor - item.goalsAgainst;
    },
  }),
  createTableColumn<GridItem>({
    columnId: 'points',
    compare: (a, b) => {
      return a.points - b.points;
    },
    renderHeaderCell: () => {
      return 'Points';
    },
    renderCell: (item) => {
      return item.points;
    },
  }),
  // createTableColumn<GridItem>({
  //   columnId: 'lastUpdate',
  //   compare: (a, b) => {
  //     return a.lastUpdate.label.localeCompare(b.lastUpdate.label);
  //   },
  //   renderHeaderCell: () => {
  //     return 'Last update';
  //   },
  //   renderCell: (item) => {
  //     return <TableCellLayout media={item.lastUpdate.icon}>{item.lastUpdate.label}</TableCellLayout>;
  //   },
  // }),
];

type LadderTableProps = {};

const LadderTable = (props: LadderTableProps) => {
  return (
    <DataGrid
      items={tableItems}
      columns={columns}
      sortable
      getRowId={(item) => item.id}
      onSelectionChange={(e, data) => console.log(data)}
      focusMode="composite"
    >
      <DataGridHeader>
        <DataGridRow>
          {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody<GridItem>>
        {({ item, rowId }) => (
          <DataGridRow<GridItem> key={rowId}>
            {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
};

export default LadderTable;
