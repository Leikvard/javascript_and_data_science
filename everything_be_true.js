//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
    return collection.reduce((accu, elem) => accu && Boolean(elem[pre]), true);
}