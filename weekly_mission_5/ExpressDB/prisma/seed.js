const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
	try {
		const woopa = await prisma.explorer.upsert({
			where: { name: 'Galleta' },
			update: {},
			create: {
				name: 'Galleta',
				username: 'pukis',
				mission: 'Node'
			}
		});

		const woopa1 = await prisma.explorer.upsert({
			where: { name: 'Woopa' },
			update: {},
			create: {
				name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
			}
		});

		const woopa2 = await prisma.explorer.upsert({
			where: { name: 'Asuka' },
			update: {},
			create: {
				name: 'Asuka',
				username: 'Loquita',
				mission: 'Java'
			}
		});

		const woopa3 = await prisma.explorer.upsert({
			where: { name: 'Medea' },
			update: {},
			create: {
				name: 'Medea',
				username: 'Gata',
				mission: 'Node'
			}
		});

		const woopa4 = await prisma.explorer.upsert({
			where: { name: 'Luka' },
			update: {},
			create: {
				name: 'Luka',
				username: 'Lukarita',
				mission: 'Java'
			}
		});

		const woopa5 = await prisma.explorer.upsert({
			where: { name: 'Christo' },
			update: {},
			create: {
				name: 'Christo',
				username: 'Chisto',
				mission: 'Node'
			}
		});

		const woopa10 = await prisma.userTable.upsert({
			where: { name: 'Gween' },
			update: {},
			create: {
				name: 'Gween',
				lang: 'Spanish',
				missionCommander: 'GoldKardia',
				enrollments: 020522,
				hasCertification: true
			}
		});

		const woopa11 = await prisma.userTable.upsert({
			where: { name: 'Suri' },
			update: {},
			create: {
				name: 'Suri',
				lang: 'English',
				missionCommander: 'GoldKardia',
				enrollments: 020523,
				hasCertification: false
			}
		});

		const woopa6 = await prisma.missionCommander.upsert({
			where: { name: 'Suri' },
			update: {},
			create: {
				name: 'Suri',
				username: 'Alpaca',
				mainStack: 'Que es Eso',
				currentEnrollment: true,
				azureCertification: false
			}
		});

		const woopa7 = await prisma.missionCommander.upsert({
			where: { name: 'Saber' },
			update: {},
			create: {
				name: 'Saber',
				username: 'Arturia',
				mainStack: 'Que es que',
				currentEnrollment: true,
				azureCertification: true
			}
		});

		console.log('Create explorers');
	} catch (e) {
		console.error(e);
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
})();
