import { ArtWork } from './../models/art-work.model';
export class SplitArrayService{
    
    splitArray(colNum: number, arr: Array<ArtWork>): Array<ArtWork[]>{
        let artWorksCol: Array<ArtWork[]> = [];
        const colEleCount = Math.floor(arr.length/colNum);
        if(colEleCount > 0){
          for(let i = 0; i < colNum; i++){
            if(i == colNum -1 ){
              artWorksCol.push(arr.slice(i*colEleCount));
            }
            else{
              artWorksCol.push(arr.slice(i*colEleCount, i*colEleCount + colEleCount));
            }
          }
        }
        else{
          console.log("Your photos are too less to display! please add more photos");
        }
        return artWorksCol.slice();
    }
    splitArrayManual(order: Array<string>, arr: Array<ArtWork>): Array<ArtWork[]>{
      let artWorksCol: Array<ArtWork[]> = [];
      for(let i = 0; i < order.length; i++){
        artWorksCol.push(this.sortColArray(order[i], arr));
      }
      return artWorksCol;

    }
    private sortColArray(order: string, arr: Array<ArtWork>): Array<ArtWork>{
      let sortedColArray: Array<ArtWork> = [];
      let orderArray = order.split(',');
      for(let itemId of orderArray){
        sortedColArray.push(arr.find((ele:ArtWork) => {
          return ele.id == parseInt(itemId);
        }));
      }
      return sortedColArray;
    }
}