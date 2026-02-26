const request = require('supertest');
const app = require('../../app');
const { db } = require('../../configuration/database');

describe('Integration tests for companies API', () => {
  beforeAll(async () => {
    await db('companies').truncate();
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
});
