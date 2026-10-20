import assert from 'node:assert/strict';import fs from 'node:fs';assert.ok(!fs.readFileSync('public/analytics.js','utf8').includes('fetch('));console.log('PASS: template analytics disabled.');
