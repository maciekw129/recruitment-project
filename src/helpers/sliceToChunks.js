export default function sliceToChunks(array) {
    const slicedArray = [];
    for(let i=0; i < array.length; i += 10) {
        let chunk = array.slice(i, i + 10);
        slicedArray.push(chunk);
    }
    return slicedArray;
}