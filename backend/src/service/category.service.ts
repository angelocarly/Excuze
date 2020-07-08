import { Category } from "../entities/category.entity";
import { Service, Inject } from "typedi";
import { CategoryRepository } from "../repositories/category.repository";
import { DeleteResult, InsertResult, UpdateResult } from "typeorm";

@Service()
export default class CategoryService {

	@Inject()
	public repository!: CategoryRepository;

	find(id: number): Promise<Category | undefined> {
		return this.repository.find(id);
	}

	findAll(): Promise<Category[]> {
		return this.repository.findAll();
	}

	insert(category: Category): Promise<InsertResult> {
		return this.repository.insert(category);
	}

	update(id: number, category: Category): Promise<UpdateResult> {
		return this.repository.update(id, category);
	}

	delete(id: number): Promise<DeleteResult> {
		return this.repository.delete(id);
	}

	getMenu(): Promise<Category[]> {
		return this.repository.findAllJoinConsumptions();
	}

}