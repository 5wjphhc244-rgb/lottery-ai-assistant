/**
 * Seed real lottery data into the database if tables are empty.
 * Falls back silently if DB is unavailable.
 */
export async function seedRealData(): Promise<void> {
  try {
    const { getPool } = await import('../utils/db');
    const pool = getPool();

    // Check if data already exists
    const [rows] = await pool.execute('SELECT COUNT(*) as cnt FROM lottery_results');
    const count = (rows as any[])[0]?.cnt || 0;
    if (count > 0) {
      console.log(`[Seed] Database already has ${count} records, skipping seed.`);
      return;
    }

    // Import mock data as seed
    const { mockData } = await import('./mockData');
    for (const [type, results] of Object.entries(mockData)) {
      for (const r of results) {
        try {
          await pool.execute(
            `INSERT IGNORE INTO lottery_results (type, issue, draw_date, red_balls, blue_ball, bonus_balls, prize_pool, sales_amount)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              r.type,
              r.issue,
              r.draw_date,
              JSON.stringify(r.red_balls),
              r.blue_ball || null,
              r.bonus_balls ? JSON.stringify(r.bonus_balls) : null,
              r.prize_pool || null,
              r.sales_amount || null,
            ]
          );
        } catch {
          // Ignore individual insert errors
        }
      }
    }
    console.log('[Seed] Real data seeded successfully.');
  } catch (err: any) {
    console.warn('[Seed] Skipping seed:', err.message);
  }
}
