import type { LotteryResult } from '../types';

export interface ScrapedLotteryData {
  type: string;
  issue: string;
  draw_date: string;
  red_balls: string[];
  blue_ball?: string;
  bonus_balls?: string[];
  prize_pool?: string;
  sales_amount?: string;
}

/**
 * Fetch all lottery types from external sources.
 * Returns a record mapping lottery type to an array of scraped results.
 */
export async function fetchAllLotteryTypes(): Promise<Record<string, ScrapedLotteryData[]>> {
  // Placeholder – returns empty so sync falls back to mock data
  return {};
}

/**
 * Save scraped lottery data to the database.
 * Returns the number of records inserted/updated.
 */
export async function saveLotteryData(data: ScrapedLotteryData[]): Promise<number> {
  try {
    const { getPool } = await import('../utils/db');
    const pool = getPool();
    let inserted = 0;

    for (const item of data) {
      try {
        const [result] = await pool.execute(
          `INSERT INTO lottery_results (type, issue, draw_date, red_balls, blue_ball, bonus_balls, prize_pool, sales_amount)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)
           ON DUPLICATE KEY UPDATE draw_date = VALUES(draw_date), red_balls = VALUES(red_balls)`,
          [
            item.type,
            item.issue,
            item.draw_date,
            JSON.stringify(item.red_balls),
            item.blue_ball || null,
            item.bonus_balls ? JSON.stringify(item.bonus_balls) : null,
            item.prize_pool || null,
            item.sales_amount || null,
          ]
        );
        if ((result as any).affectedRows > 0) inserted++;
      } catch {
        // Skip individual row errors
      }
    }

    return inserted;
  } catch (err: any) {
    throw new Error(`saveLotteryData failed: ${err.message}`);
  }
}
