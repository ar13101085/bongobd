export default interface IPlayer{
    play(fileUrl:string,obsetPosition:number):boolean;
    forward(stepPosition:number):any;
    rewind(stepPosition:number):any;
}