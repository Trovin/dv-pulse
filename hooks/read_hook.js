const chunks = [];
process.stdin.on('data', chunk => chunks.push(chunk));
process.stdin.on('end', () => {
  const data = JSON.parse(Buffer.concat(chunks).toString());
  const path = data?.tool_input?.path || '';

  if (path.includes('.env')) {  // поймает и .env и .env.ts
    console.error('You cannot read the .env file');
    process.exit(1);
  }

  process.exit(0);
});
