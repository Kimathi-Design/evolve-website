import { Pool } from 'pg';

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });
  }
  return pool;
}

export async function query(text: string, params?: (string | number | boolean | null)[]) {
  const pool = getPool();
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Contact-related queries
export const contactQueries = {
  async create(contact: {
    name: string;
    email: string;
    company?: string;
    message: string;
  }) {
    const { name, email, company, message } = contact;
    const text = `
      INSERT INTO contacts (name, email, company, message)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [name, email, company || null, message];
    const result = await query(text, values);
    return result.rows[0];
  },

  async getAll() {
    const text = 'SELECT * FROM contacts ORDER BY created_at DESC';
    const result = await query(text);
    return result.rows;
  },

  async getById(id: number) {
    const text = 'SELECT * FROM contacts WHERE id = $1';
    const result = await query(text, [id]);
    return result.rows[0];
  }
};

// Kickoff-related queries
export const kickoffQueries = {
  async create(kickoff: {
    contact_id?: number;
    company_name: string;
    industry?: string;
    project_type?: string;
    budget_range?: string;
    timeline?: string;
    goals?: string;
    target_audience?: string;
    current_challenges?: string;
    additional_info?: string;
  }) {
    const {
      contact_id,
      company_name,
      industry,
      project_type,
      budget_range,
      timeline,
      goals,
      target_audience,
      current_challenges,
      additional_info
    } = kickoff;
    
    const text = `
      INSERT INTO kickoffs (
        contact_id, company_name, industry, project_type, budget_range,
        timeline, goals, target_audience, current_challenges, additional_info
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *
    `;
    
    const values = [
      contact_id || null,
      company_name,
      industry || null,
      project_type || null,
      budget_range || null,
      timeline || null,
      goals || null,
      target_audience || null,
      current_challenges || null,
      additional_info || null
    ];
    
    const result = await query(text, values);
    return result.rows[0];
  }
};