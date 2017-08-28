export class ArtWork{
    constructor(
        public id: number,
        public title: string,
        public coverPhotoPath: string,
        public photosPath: Array<string>
    ){}
}