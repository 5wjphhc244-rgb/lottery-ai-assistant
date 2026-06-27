import type { LotteryResult } from '../types';

export const mockData: Record<string, LotteryResult[]> = {
  ssq: [
    {
      id: 1,
      type: 'ssq',
      issue: '2026070',
      draw_date: '2026-06-24',
      red_balls: ['03', '12', '15', '22', '28', '31'],
      blue_ball: '09',
      prize_pool: '500000000',
      sales_amount: '350000000',
      created_at: '2026-06-24T20:30:00Z',
    },
    {
      id: 2,
      type: 'ssq',
      issue: '2026069',
      draw_date: '2026-06-22',
      red_balls: ['05', '08', '17', '21', '26', '33'],
      blue_ball: '12',
      prize_pool: '480000000',
      sales_amount: '340000000',
      created_at: '2026-06-22T20:30:00Z',
    },
  ],
  d3: [
    {
      id: 10,
      type: 'd3',
      issue: '2026170',
      draw_date: '2026-06-27',
      red_balls: ['3', '5', '8'],
      created_at: '2026-06-27T20:30:00Z',
    },
    {
      id: 11,
      type: 'd3',
      issue: '2026169',
      draw_date: '2026-06-26',
      red_balls: ['1', '4', '7'],
      created_at: '2026-06-26T20:30:00Z',
    },
  ],
  qlc: [
    {
      id: 20,
      type: 'qlc',
      issue: '2026070',
      draw_date: '2026-06-25',
      red_balls: ['02', '07', '11', '15', '19', '23', '28'],
      blue_ball: '05',
      created_at: '2026-06-25T20:30:00Z',
    },
  ],
  kl8: [
    {
      id: 30,
      type: 'kl8',
      issue: '2026170',
      draw_date: '2026-06-27',
      red_balls: [],
      bonus_balls: [
        '01', '05', '10', '15', '20', '25', '30', '35', '40', '45',
        '50', '55', '60', '65', '70', '75', '78', '79', '80', '03',
      ],
      created_at: '2026-06-27T20:30:00Z',
    },
  ],
};
