const request = require('supertest');
const app = require('../../app');
const { db } = require('../../configuration/database');

describe('Integration tests for companies API', () => {
  beforeAll(async () => {
    await db.raw('SET FOREIGN_KEY_CHECKS = 0');

    await db('videogame_console').truncate();
    await db('videogames').truncate();
    await db('companies').truncate();
    await db('consoles').truncate();

    await db.raw('SET FOREIGN_KEY_CHECKS = 1');

    await db('companies').insert({
      id: 1,
      name: 'Nintendo',
      description: 'Gigante japonés del entretenimiento familiar.',
      country: 'Japón',
      year_founded: 1889,
      website: 'https://www.nintendo.com',
      logo: 'logo.png'
    });
  });

  afterAll(async () => {
    await db.destroy();
  });

  describe('GET /companies', () => {
    test('should return a list of companies', async () => {
      const response = await request(app).get('/companies');

      expect(response.statusCode).toEqual(200);
      expect(response.body.title).toBe('success');
      expect(response.body.message).toBe('Companies retrieved successfully');
      expect(response.body).toHaveProperty('data');
      expect(Array.isArray(response.body.data)).toBe(true);

      expect(response.body.data[0].name).toBe('Nintendo');
      expect(response.body.data[0]).toHaveProperty('yearsSinceFounded');
    });
  });
});
