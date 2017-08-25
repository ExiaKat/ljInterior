import { ArtWork } from './art-work.model';

export class Category{

    constructor(
        public category: string,
        public artWorks: ArtWork[]
    ){}
}