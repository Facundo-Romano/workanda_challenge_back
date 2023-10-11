import { Schema, Entity } from 'redis-om';
import client from '../config.js';
class Banner extends Entity {}

const bannerSchema = new Schema(Banner, {
	nameDesktop: { type: 'string' },
	nameMobile: { type: 'string' },
	link: { type: 'string' },
	blank: { type: 'boolean' },
	category: { type: 'string' },
	order: { type: 'number' },
	active: { type: 'boolean' },
	createdAt: { type: 'number' },
	updatedAt: { type: 'number' },
});

const bannerRepository = client.fetchRepository(bannerSchema);

await bannerRepository.createIndex();
export default bannerRepository;