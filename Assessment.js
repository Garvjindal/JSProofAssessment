// Create a variable to hold NFTs
let nftCollection = [];

// Function to mint NFT (now representing stationary items)
function mintNFT(id, name, brand, category, price, quantity) {
    // Create stationary item object with metadata
    let newNFT = {
        id: id,
        name: name,
        brand: brand,
        category: category,
        price: price,
        quantity: quantity,
    };
    // Store stationary item in collection
    nftCollection.push(newNFT);
}

// Function to list NFTs
function listNFTs() {
    // Iterate through collection and print metadata using a for loop
    for (let i = 0; i < nftCollection.length; i++) {
        let nft = nftCollection[i];
        console.log("ID: " + nft.id);
        console.log("Name: " + nft.name);
        console.log("Brand: " + nft.brand);
        console.log("Category: " + nft.category);
        console.log("Price: " + nft.price);
        console.log("Quantity: " + nft.quantity);
        console.log("-----------------------");
    }
}

// Function to get total supply
function getTotalSupply() {
    // Return the length of the collection
    return nftCollection.length;
}

// Mint some stationary items
mintNFT(1, "Gel Pen", "Pilot", "Pen", "$2", 100);
mintNFT(2, "A4 Notebook", "Moleskine", "Notebook", "$15", 50);
mintNFT(3, "Eraser", "Faber-Castell", "Eraser", "$1", 200);
mintNFT(4, "Highlighter", "Sharpie", "Marker", "$3", 75);

// List stationary items
console.log("Listing Stationary Items:");
console.log("-----------------------");
listNFTs();

// Print total supply
console.log("Total stationary items: " + getTotalSupply());
