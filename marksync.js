
function SaveTree(bookmarkItems){

}
function onRejected(error){
	console.log('An error: $(error)');
}

console.log("starting up");
var bookmarx=browser.bookmarks.getTree();
console.log("bookmarks loading");
bookmarx.then(SaveTree,onRejected);
console.log("all done");
