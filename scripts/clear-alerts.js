import { PrismaClient } from '../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Connecting to the database...');
  await prisma.$connect();
  console.log('Connection successful. Deleting all alerts...');

  const { count } = await prisma.alert.deleteMany({});
  
  console.log(`✅ Successfully deleted ${count} alerts.`);
}

main()
  .catch((e) => {
    console.error('An error occurred:');
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Disconnected from the database.');
  }); 