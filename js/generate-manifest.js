// Run this script to generate a manifest of available questions
// Usage: node generate-manifest.js

const fs = require('fs');
const path = require('path');

function generateManifest() {
  const questionsDir = path.join(__dirname, '../questions');
  
  if (!fs.existsSync(questionsDir)) {
    console.log('Questions directory not found');
    return;
  }

  // Get all date folders
  const dateFolders = fs.readdirSync(questionsDir)
    .filter(f => /^\d{4}-\d{2}-\d{2}$/.test(f))
    .sort()
    .reverse();

  const manifest = {};

  dateFolders.forEach(date => {
    const dateDir = path.join(questionsDir, date);
    const files = fs.readdirSync(dateDir)
      .filter(f => f.endsWith('.json'))
      .map(f => f.replace('.json', ''));

    manifest[date] = {
      generated: new Date(date).toISOString(),
      subjects: files,
      count: files.length
    };
  });

  // Write manifest for latest date
  if (dateFolders.length > 0) {
    const latestDate = dateFolders[0];
    const manifestPath = path.join(questionsDir, latestDate, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest[latestDate], null, 2));
    console.log(`Manifest created for ${latestDate}`);
  }

  // Write overall manifest
  const overallManifestPath = path.join(questionsDir, 'manifest.json');
  fs.writeFileSync(overallManifestPath, JSON.stringify(manifest, null, 2));
  console.log('Overall manifest created');
}

generateManifest();
