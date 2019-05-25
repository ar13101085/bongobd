import IPlayer from "../infrastructure/player";

export default class BioscopePlayer implements IPlayer {
    mediaUrl: string;
    currentObset:number=0;

    play(url: string,obsetPosition:number): boolean {
        console.log(url +" is playing at "+obsetPosition);
        return true;
    }

    forward(stepPosition: number=10) {
        this.currentObset+=10;
        this.play(this.mediaUrl,this.currentObset);
    }
    rewind(stepPosition: number=10) {
        this.currentObset-=10;
        if(this.currentObset<0){
            this.currentObset=0;
        }
        this.play(this.mediaUrl,this.currentObset);
    }


}