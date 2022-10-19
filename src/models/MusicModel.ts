class MusicModel {
    name: string;
    id: string;

    constructor(name: string){
        this.name = name;
        this.id = new Date().toISOString();
    }
}

export default MusicModel;