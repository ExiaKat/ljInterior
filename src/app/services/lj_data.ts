import { ArtWork } from './../models/art-work.model';
import { Category } from './../models/category.model';

export class LJData{
	public categories: Array<Category> = [];
	public retailArtWorks: Array<ArtWork> = [];
	public renderingArtWorks: Array<ArtWork> = [];
	public paintingArtWorks: Array<ArtWork> = [];

	constructor(){		
	   this.initRetailArtWorks();
	   this.initRenderingArtWorks();
	   this.initPaintingArtWorks();
	}

	initPaintingArtWorks(){
		this.paintingArtWorks = [
			new ArtWork(1,"",
			"images/projects/paintings/1_b.jpg",
			["images/projects/paintings/original/1_b.jpg"]),
			new ArtWork(2,"",
			"images/projects/paintings/2_b.jpg",
			["images/projects/paintings/original/2_b.jpg"]),
			new ArtWork(3,"",
			"images/projects/paintings/3_b.jpg",
			["images/projects/paintings/original/3_b.jpg"]),
			new ArtWork(4,"",
			"images/projects/paintings/4_b.jpg",
			["images/projects/paintings/original/4_b.jpg"]),
			new ArtWork(5,"",
			"images/projects/paintings/5_b.jpg",
			["images/projects/paintings/original/5_b.jpg"])
		]
		this.categories.push(new Category("Paintings", this.paintingArtWorks));
	}

	initRenderingArtWorks(){
		this.renderingArtWorks = [
			new ArtWork(1,"",
			"images/projects/Renders/0001.jpg",
			["images/projects/Renders/0001.jpg"]),
			new ArtWork(2,"",
			"images/projects/Renders/0002.jpg",
			["images/projects/Renders/0002.jpg"]),
			new ArtWork(3,"",
			"images/projects/Renders/0003.jpg",
			["images/projects/Renders/0003.jpg"]),
			new ArtWork(4,"",
			"images/projects/Renders/0004.jpg",
			["images/projects/Renders/0004.jpg"]),
			new ArtWork(5,"",
			"images/projects/Renders/0005.jpg",
			["images/projects/Renders/0005.jpg"]),
			new ArtWork(6,"",
			"images/projects/Renders/0006.jpg",
			["images/projects/Renders/0006.jpg"]),
			new ArtWork(7,"",
			"images/projects/Renders/0007.jpg",
			["images/projects/Renders/0007.jpg"]),
			new ArtWork(8,"",
			"images/projects/Renders/0008.jpg",
			["images/projects/Renders/0008.jpg"]),
			new ArtWork(9,"",
			"images/projects/Renders/0009.jpg",
			["images/projects/Renders/0009.jpg"]),
			new ArtWork(10,"",
			"images/projects/Renders/0010.jpg",
			["images/projects/Renders/0010.jpg"]),
			new ArtWork(11,"",
			"images/projects/Renders/0011.jpg",
			["images/projects/Renders/0011.jpg"]),
			new ArtWork(12,"",
			"images/projects/Renders/0012.jpg",
			["images/projects/Renders/0012.jpg"]),
			new ArtWork(13,"",
			"images/projects/Renders/0013.jpg",
			["images/projects/Renders/0013.jpg"]),
			new ArtWork(14,"",
			"images/projects/Renders/006.jpg",
			["images/projects/Renders/006.jpg"])
		]
		this.categories.push(new Category("Renderings", this.renderingArtWorks));
	}

	initRetailArtWorks(){
		this.retailArtWorks = [
			new ArtWork(1,"Fish & Co - Tramshed Shopping Centre",
			"images/projects/01Fish & Co - Tramshed Shopping Centre/001.jpg",
			["images/projects/01Fish & Co - Tramshed Shopping Centre/001.jpg",
			"images/projects/01Fish & Co - Tramshed Shopping Centre/002.jpg",
			"images/projects/01Fish & Co - Tramshed Shopping Centre/003.jpg",
			"images/projects/01Fish & Co - Tramshed Shopping Centre/004.jpg",
			"images/projects/01Fish & Co - Tramshed Shopping Centre/005.jpg",
			"images/projects/01Fish & Co - Tramshed Shopping Centre/006.jpg"]),
			new ArtWork(2,"The Bun Saigon - Eastgarden Westfiled",
			"images/projects/02The Bun Saigon - Eastgarden Westfiled/001.jpg",
			["images/projects/02The Bun Saigon - Eastgarden Westfiled/001.jpg",
			"images/projects/02The Bun Saigon - Eastgarden Westfiled/002.jpg",
			"images/projects/02The Bun Saigon - Eastgarden Westfiled/003.jpg",
			"images/projects/02The Bun Saigon - Eastgarden Westfiled/004.jpg",
			"images/projects/02The Bun Saigon - Eastgarden Westfiled/005.jpg",
			"images/projects/02The Bun Saigon - Eastgarden Westfiled/006.jpg"]),
			new ArtWork(3,"Shoe Box - Miranda Westfield",
			"images/projects/03Shoe Box - Miranda Westfield/001.jpg",
			["images/projects/03Shoe Box - Miranda Westfield/001.jpg",
			"images/projects/03Shoe Box - Miranda Westfield/002.jpg",
			"images/projects/03Shoe Box - Miranda Westfield/003.jpg",
			"images/projects/03Shoe Box - Miranda Westfield/004.jpg"]),
			new ArtWork(4,"The Living Room - St. Ives Shopping Village",
			"images/projects/04The Living Room - St. Ives Shopping Village/001.jpg",
			["images/projects/04The Living Room - St. Ives Shopping Village/001.jpg",
			"images/projects/04The Living Room - St. Ives Shopping Village/002.jpg",
			"images/projects/04The Living Room - St. Ives Shopping Village/003.jpg",
			"images/projects/04The Living Room - St. Ives Shopping Village/004.jpg",
			"images/projects/04The Living Room - St. Ives Shopping Village/005.jpg",
			"images/projects/04The Living Room - St. Ives Shopping Village/006.jpg",
			"images/projects/04The Living Room - St. Ives Shopping Village/007.jpg"]),
			new ArtWork(5,"Central Cuts - Central Park",
			"images/projects/05Central Cuts - Central Park/001.jpg",
			["images/projects/05Central Cuts - Central Park/001.jpg",
			"images/projects/05Central Cuts - Central Park/002.jpg",
			"images/projects/05Central Cuts - Central Park/003.jpg",
			"images/projects/05Central Cuts - Central Park/004.jpg"]),
			new ArtWork(6,"My Donut Box - Broadway Shopping Centre",
			"images/projects/06My Donut Box - Broadway Shopping Centre/001.jpg",
			["images/projects/06My Donut Box - Broadway Shopping Centre/001.jpg",
			"images/projects/06My Donut Box - Broadway Shopping Centre/002.jpg",
			"images/projects/06My Donut Box - Broadway Shopping Centre/003.jpg",
			"images/projects/06My Donut Box - Broadway Shopping Centre/004.jpg"]),
			new ArtWork(7,"The Depot Nail Bar - Broadway Shopping Centre",
			"images/projects/07The Depot Nail Bar - Broadway Shopping Centre/001.jpg",
			["images/projects/07The Depot Nail Bar - Broadway Shopping Centre/001.jpg",
			"images/projects/07The Depot Nail Bar - Broadway Shopping Centre/002.jpg",
			"images/projects/07The Depot Nail Bar - Broadway Shopping Centre/003.jpg",
			"images/projects/07The Depot Nail Bar - Broadway Shopping Centre/004.jpg",
			"images/projects/07The Depot Nail Bar - Broadway Shopping Centre/005.jpg",
			"images/projects/07The Depot Nail Bar - Broadway Shopping Centre/006.jpg",
			"images/projects/07The Depot Nail Bar - Broadway Shopping Centre/007.jpg"]),
			new ArtWork(8,"Red Mango - Greenwood Plaza",
			"images/projects/08Red Mango - Greenwood Plaza/002.jpg",
			["images/projects/08Red Mango - Greenwood Plaza/001.jpg",
			"images/projects/08Red Mango - Greenwood Plaza/002.jpg",
			"images/projects/08Red Mango - Greenwood Plaza/003.jpg",
			"images/projects/08Red Mango - Greenwood Plaza/004.jpg"]),
			new ArtWork(9,"Master Yang - Chatswood Interchange",
			"images/projects/09Master Yang - Chatswood Interchange/001.jpg",
			["images/projects/09Master Yang - Chatswood Interchange/001.jpg"]),
			new ArtWork(10,"one Ton - Chatswood",
			"images/projects/10one Ton - Chatswood/1.jpg",
			["images/projects/10one Ton - Chatswood/1.jpg",
			"images/projects/10one Ton - Chatswood/2.jpg"]),
			new ArtWork(11,"Free Choice - Chatswood Interchange",
			"images/projects/11Free Choice - Chatswood Interchange/001.jpg",
			["images/projects/11Free Choice - Chatswood Interchange/001.jpg"]),
			new ArtWork(12,"Tongli Supermarket - Hurstville Westfield",
			"images/projects/12Tongli Supermarket - Hurstville Westfield/001.jpg",
			["images/projects/12Tongli Supermarket - Hurstville Westfield/001.jpg",
			"images/projects/12Tongli Supermarket - Hurstville Westfield/002.jpg"]),
			new ArtWork(13,"Shinobu - Westfield",
			"images/projects/13Shinobu - Westfield/001.jpg",
			["images/projects/13Shinobu - Westfield/001.jpg",
			"images/projects/13Shinobu - Westfield/002.jpg",
			"images/projects/13Shinobu - Westfield/003.jpg",
			"images/projects/13Shinobu - Westfield/004.jpg",
			"images/projects/13Shinobu - Westfield/005.jpg"]),
			new ArtWork(14,"VNH Dollars - Westfield",
			"images/projects/14VNH Dollars - Westfield/001.jpg",
			["images/projects/14VNH Dollars - Westfield/001.jpg"])
		];
		this.categories.push(new Category("Retail", this.retailArtWorks));
	}
}