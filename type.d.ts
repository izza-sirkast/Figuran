interface ImageBase64 {
    _id: string,
    imageBase64: string,
    title: string;
}

interface ImageInADate {
    count : number,
    _id : string,
    data : Array<ImageBase64>
}